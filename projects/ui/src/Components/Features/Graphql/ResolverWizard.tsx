import styled from '@emotion/styled/macro';
import { TabList, TabPanel, TabPanels } from '@reach/tabs';
import { useGetGraphqlSchemaDetails, useGetGraphqlSchemaYaml } from 'API/hooks';
import { StyledModalTab, StyledModalTabs } from 'Components/Common/SoloModal';
import { Formik, FormikState } from 'formik';
import React from 'react';
import { colors } from 'Styles/colors';
import {
  SoloButtonStyledComponent,
  SoloNegativeButton,
} from 'Styles/StyledComponents/button';
import * as yup from 'yup';
import YAML from 'yaml';
import { graphqlApi } from 'API/graphql';
import { Resolution } from 'proto/github.com/solo-io/solo-apis/api/gloo/graphql.gloo/v1alpha1/graphql_pb';
import { useParams } from 'react-router';
import ConfirmationModal from 'Components/Common/ConfirmationModal';
import { ResolverTypeSection } from './components/ResolverTypeSection';
import { UpstreamSection } from './components/UpstreamSection';
import { ResolverConfigSection } from './components/ResolverConfigSection';

export const EditorContainer = styled.div<{ editMode: boolean }>`
  .ace_cursor {
    opacity: ${props => (props.editMode ? 1 : 0)};
  }
  cursor: ${props => (props.editMode ? 'text' : 'default')};
`;

export const IconButton = styled.button`
  display: inline-flex;
  cursor: pointer;
  border: none;
  outline: none !important;
  background: transparent;
  justify-content: center;
  align-items: center;
  color: ${props => colors.lakeBlue};
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: default;
  }
`;

export type ResolverWizardFormProps = {
  resolverType: 'REST' | 'gRPC';
  upstream: string;
  resolverConfig: string;
};

const validationSchema = yup.object().shape({
  resolverType: yup.string().required('You need to specify a resolver type.'),
  upstream: yup.string().required('You need to specify an upstream.'),
  resolverConfig: yup
    .string()
    .required('You need to specify a resolver configuration.'),
});

type ResolverWizardProps = {
  onClose: () => void;
  resolver?: Resolution.AsObject;
  resolverName?: string;
  hasDirective?: boolean;
  fieldWithDirective?: string;
  fieldWithoutDirective?: string;
};

export const ResolverWizard: React.FC<ResolverWizardProps> = props => {
  let { hasDirective, fieldWithDirective, fieldWithoutDirective } = props;
  const {
    graphqlSchemaName = '',
    graphqlSchemaNamespace = '',
    graphqlSchemaClusterName = '',
  } = useParams();

  const { data: graphqlSchema, mutate } = useGetGraphqlSchemaDetails({
    name: graphqlSchemaName,
    namespace: graphqlSchemaNamespace,
    clusterName: graphqlSchemaClusterName,
  });

  const { mutate: mutateSchemaYaml } = useGetGraphqlSchemaYaml({
    name: graphqlSchemaName,
    namespace: graphqlSchemaNamespace,
    clusterName: graphqlSchemaClusterName,
  });
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };
  const [isValid, setIsValid] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(Boolean(props.resolver));
  const [attemptUpdateSchema, setAttemptUpdateSchema] = React.useState(false);

  const submitResolverConfig = async (values: ResolverWizardFormProps) => {
    let { resolverConfig, resolverType, upstream } = values;

    /*
     `parsedResolverConfig` can be formatted in different ways:
     - `restResolver.[request | response | spanName | ...]`....
     - `grpcResolver.[request | response | spanName | ...]`...
     - `[request | response | spanName | ...]`...
    */
    let parsedResolverConfig = YAML.parse(resolverConfig);

    let headersMap: [string, string][] = [];
    let queryParamsMap: [string, string][] = [];
    let settersMap: [string, string][] = [];
    let requestMetadataMap: [string, string][] = [];
    let serviceName = '';
    let methodName = '';
    let outgoingMessageJson;
    let body;

    let resultRoot = parsedResolverConfig?.grpcResolver?.resultRoot;
    let spanName = parsedResolverConfig?.grpcResolver?.spanName
      ? parsedResolverConfig?.grpcResolver?.spanName
      : parsedResolverConfig?.restResolver?.spanName;

    let grpcRequest = parsedResolverConfig?.grpcResolver?.requestTransform;
    let request = parsedResolverConfig?.restResolver?.request;
    let response = parsedResolverConfig?.restResolver?.response;

    if (resolverType === 'REST') {
      if (parsedResolverConfig?.restResolver) {
        headersMap = Object.entries(
          parsedResolverConfig?.restResolver?.request?.headers
        );

        queryParamsMap = Object.entries(
          parsedResolverConfig?.restResolver?.request?.queryParams ?? {}
        );

        body = parsedResolverConfig?.restResolver?.request?.body;
        settersMap = Object.entries(
          parsedResolverConfig?.restResolver?.response?.settersMap ?? {}
        );
        resultRoot = parsedResolverConfig?.restResolver?.response?.resultRoot;
        spanName = parsedResolverConfig?.restResolver?.spanName;
      }
    } else {
      if (parsedResolverConfig?.grpcResolver) {
        requestMetadataMap = Object.entries(
          parsedResolverConfig?.grpcResolver?.requestTransform
            ?.requestMetadataMap ?? {}
        );
        serviceName =
          parsedResolverConfig?.grpcResolver?.requestTransform?.serviceName;
        methodName =
          parsedResolverConfig?.grpcResolver?.requestTransform?.methodName;
        spanName = parsedResolverConfig?.grpcResolver?.spanName;
        outgoingMessageJson =
          parsedResolverConfig?.grpcResolver?.requestTransform
            ?.outgoingMessageJson;
      }
    }

    let [upstreamName, upstreamNamespace] = upstream.split('::');

    await graphqlApi.updateGraphqlSchemaResolver(
      {
        name: graphqlSchemaName,
        namespace: graphqlSchemaNamespace,
        clusterName: graphqlSchemaClusterName,
      },
      {
        upstreamRef: {
          name: upstreamName!,
          namespace: upstreamNamespace!,
        },
        //@ts-ignore
        ...(request && {
          request: {
            headersMap,
            queryParamsMap,
            body,
          },
        }),
        resolverName: props.resolverName!,
        //@ts-ignore
        ...(grpcRequest && {
          grpcRequest: {
            methodName,
            requestMetadataMap,
            serviceName,
            outgoingMessageJson,
          },
        }),
        resolverType,
        //@ts-ignore
        ...(response && { response: { resultRoot, settersMap } }),
        spanName,
        hasDirective,
        fieldWithDirective,
        fieldWithoutDirective,
      }
    );
    mutate();
    mutateSchemaYaml();
    props.onClose();
  };
  const removeResolverConfig = async () => {
    await graphqlApi.updateGraphqlSchemaResolver(
      {
        name: graphqlSchemaName,
        namespace: graphqlSchemaNamespace,
        clusterName: graphqlSchemaClusterName,
      },
      {
        resolverName: props.resolverName!,
        hasDirective,
        fieldWithDirective,
        fieldWithoutDirective,
      },
      true
    );
    setTimeout(() => {
      mutate();
    }, 300);
    props.onClose();
  };
  const resolverTypeIsValid = (
    formik: FormikState<ResolverWizardFormProps>
  ) => {
    return !formik.errors.resolverType;
  };

  const upstreamIsValid = (formik: FormikState<ResolverWizardFormProps>) => {
    return !formik.errors.upstream;
  };

  const resolverConfigIsValid = (
    formik: FormikState<ResolverWizardFormProps>
  ) => {
    return !formik.errors.resolverConfig;
  };

  const formIsValid = (formik: FormikState<ResolverWizardFormProps>) =>
    resolverTypeIsValid(formik) &&
    upstreamIsValid(formik) &&
    resolverConfigIsValid(formik);

  React.useEffect(() => {
    setIsEdit(Boolean(props.resolver));
  }, [props.resolver]);

  const getInitialResolverConfig = (resolver?: typeof props.resolver) => {
    if (resolver?.restResolver) {
      return YAML.stringify(resolver);
    }
    return '';
  };

  return (
    <div className='h-[700px]'>
      <Formik<ResolverWizardFormProps>
        initialValues={{
          resolverType: 'REST',
          upstream:
            graphqlSchema?.spec?.executableSchema?.executor?.local?.resolutionsMap?.find(
              ([rN, r]) => rN === props.resolverName
            )?.[1]?.restResolver?.upstreamRef?.name!
              ? `${graphqlSchema?.spec?.executableSchema?.executor?.local?.resolutionsMap?.find(
                  ([rN, r]) => rN === props.resolverName
                )?.[1]?.restResolver?.upstreamRef
                  ?.name!}::${graphqlSchema?.spec?.executableSchema?.executor?.local?.resolutionsMap?.find(
                  ([rN, r]) => rN === props.resolverName
                )?.[1]?.restResolver?.upstreamRef?.namespace!}`
              : graphqlSchema?.spec?.executableSchema?.executor?.local?.resolutionsMap?.find(
                  ([rN, r]) => rN === props.resolverName
                )?.[1]?.grpcResolver?.upstreamRef?.name!
              ? `${graphqlSchema?.spec?.executableSchema?.executor?.local?.resolutionsMap?.find(
                  ([rN, r]) => rN === props.resolverName
                )?.[1]?.grpcResolver?.upstreamRef
                  ?.name!}::${graphqlSchema?.spec?.executableSchema?.executor?.local?.resolutionsMap?.find(
                  ([rN, r]) => rN === props.resolverName
                )?.[1]?.grpcResolver?.upstreamRef?.namespace!}`
              : '',
          resolverConfig: getInitialResolverConfig(props?.resolver),
        }}
        enableReinitialize
        validateOnMount={true}
        validationSchema={validationSchema}
        onSubmit={submitResolverConfig}>
        {formik => (
          <>
            <StyledModalTabs
              style={{ backgroundColor: colors.oceanBlue }}
              className='grid h-full rounded-lg grid-cols-[150px_1fr]'
              index={tabIndex}
              onChange={handleTabsChange}>
              <TabList className='flex flex-col mt-6'>
                <StyledModalTab
                  isCompleted={!!formik.values.resolverType?.length}>
                  Resolver Type
                </StyledModalTab>

                <StyledModalTab isCompleted={!!formik.values.upstream?.length}>
                  Upstream
                </StyledModalTab>
                <StyledModalTab
                  isCompleted={!!formik.values.resolverConfig?.length}>
                  Resolver Config
                </StyledModalTab>
              </TabList>
              <TabPanels className='bg-white rounded-r-lg'>
                <TabPanel className='relative flex flex-col justify-between h-full pb-4 focus:outline-none'>
                  <ResolverTypeSection isEdit={isEdit} />
                  <div className='ml-2'>
                    <SoloNegativeButton
                      onClick={() => {
                        setAttemptUpdateSchema(true);
                      }}>
                      Remove Configuration
                    </SoloNegativeButton>
                  </div>
                  <div className='flex items-center justify-between px-6 '>
                    <IconButton onClick={() => props.onClose()}>
                      Cancel
                    </IconButton>
                    <SoloButtonStyledComponent
                      onClick={() => setTabIndex(tabIndex + 1)}
                      disabled={!resolverTypeIsValid(formik)}>
                      Next Step
                    </SoloButtonStyledComponent>
                  </div>
                </TabPanel>

                <TabPanel className='relative flex flex-col justify-between h-full pb-4 focus:outline-none'>
                  <UpstreamSection
                    isEdit={isEdit}
                    existingUpstream={`${
                      props.resolver?.restResolver?.upstreamRef?.name!
                        ? `${props.resolver?.restResolver?.upstreamRef
                            ?.name!}::${props.resolver?.restResolver
                            ?.upstreamRef?.namespace!}`
                        : props.resolver?.grpcResolver?.upstreamRef?.name!
                        ? `${props.resolver?.grpcResolver?.upstreamRef
                            ?.name!}::${props.resolver?.grpcResolver
                            ?.upstreamRef?.namespace!}`
                        : ''
                    }`}
                  />
                  <div className='flex items-center justify-between px-6 '>
                    <IconButton onClick={() => props.onClose()}>
                      Cancel
                    </IconButton>
                    <SoloButtonStyledComponent
                      onClick={() => setTabIndex(tabIndex + 1)}
                      disabled={!upstreamIsValid(formik)}>
                      Next Step
                    </SoloButtonStyledComponent>
                  </div>
                </TabPanel>
                <TabPanel className='relative flex flex-col justify-between h-full pb-4 focus:outline-none'>
                  {tabIndex === 2 && (
                    <ResolverConfigSection
                      isEdit={isEdit}
                      resolverConfig={formik.values.resolverConfig}
                      existingResolverConfig={props.resolver}
                    />
                  )}

                  <div className='flex items-center justify-between px-6 '>
                    <IconButton onClick={() => props.onClose()}>
                      Cancel
                    </IconButton>
                    <SoloButtonStyledComponent
                      onClick={formik.handleSubmit as any}
                      disabled={!formik.isValid || !formIsValid(formik)}>
                      Submit
                    </SoloButtonStyledComponent>
                  </div>
                </TabPanel>
              </TabPanels>
            </StyledModalTabs>
          </>
        )}
      </Formik>
      <ConfirmationModal
        visible={attemptUpdateSchema}
        confirmPrompt='delete this Resolver'
        confirmButtonText='Delete'
        goForIt={removeResolverConfig}
        cancel={() => {
          setAttemptUpdateSchema(false);
        }}
        isNegative
      />
    </div>
  );
};
