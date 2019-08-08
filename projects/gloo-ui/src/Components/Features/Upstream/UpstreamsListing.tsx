import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled/macro';
import { RouteComponentProps } from 'react-router';
import {
  healthConstants,
  TableHealthCircleHolder,
  TableActionCircle,
  TableActions
} from 'Styles';

import {
  ListingFilter,
  StringFilterProps,
  TypeFilterProps,
  CheckboxFilterProps,
  RadioFilterProps
} from '../../Common/ListingFilter';
import { CatalogTableToggle } from 'Components/Common/CatalogTableToggle';
import { Breadcrumb } from 'Components/Common/Breadcrumb';
import { useGetUpstreamsListV2 } from 'Api/useUpstreamClientV2';
import {
  ListUpstreamsRequest,
  DeleteUpstreamRequest
} from '../../../proto/github.com/solo-io/solo-projects/projects/grpcserver/api/v1/upstream_pb';
import { useGetUpstreamsList, useDeleteUpstream } from 'Api';
import { SectionCard } from 'Components/Common/SectionCard';
import { CardsListing } from 'Components/Common/CardsListing';
import { SoloTable } from 'Components/Common/SoloTable';
import { Upstream } from 'proto/github.com/solo-io/gloo/projects/gloo/api/v1/upstream_pb';
import { Status } from 'proto/github.com/solo-io/solo-kit/api/v1/status_pb';
import {
  getResourceStatus,
  getUpstreamType,
  groupBy,
  getIcon,
  getFunctionInfo,
  CheckboxFilters
} from 'utils/helpers';
import { NamespacesContext } from 'GlooIApp';
import { CreateUpstreamModal } from './Creation/CreateUpstreamModal';
import { HealthInformation } from 'Components/Common/HealthInformation';
import { HealthIndicator } from 'Components/Common/HealthIndicator';
import { SoloModal } from 'Components/Common/SoloModal';
import { CreateRouteModal } from '../Route/CreateRouteModal';

import { ExtraInfo } from 'Components/Features/Upstream/ExtraInfo';
import _ from 'lodash';

import { SuccessModal } from 'Components/Common/SuccessModal';
import { ResourceRef } from 'proto/github.com/solo-io/solo-kit/api/v1/ref_pb';
import { Popconfirm } from 'antd';
const TypeHolder = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StringFilters: StringFilterProps[] = [
  {
    displayName: 'Filter By Name...',
    placeholder: 'Filter by name...',
    value: ''
  }
];

const getTableColumns = (
  startCreatingRoute: (upstream: Upstream.AsObject) => any,
  deleteUpstream: (name: string, namespace: string) => void
) => {
  return [
    {
      title: 'Name',
      dataIndex: 'name'
    },

    {
      title: 'Namespace',
      dataIndex: 'metadata.namespace'
    },
    {
      title: 'Version',
      dataIndex: 'metadata.resourceVersion'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (upstreamType: string) => (
        <TypeHolder>
          {getIcon(upstreamType)}
          <span style={{ marginLeft: '5px' }}>{upstreamType}</span>
        </TypeHolder>
      )
    },
    {
      title: 'Routes',
      dataIndex: 'routes'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (healthStatus: Status.AsObject) => (
        <div>
          <TableHealthCircleHolder>
            <HealthIndicator healthStatus={healthStatus.state} />
          </TableHealthCircleHolder>
          <HealthInformation healthStatus={healthStatus} />
        </div>
      )
    },
    {
      title: 'Use TLS',
      dataIndex: 'useTls'
    },

    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (us: Upstream.AsObject) => {
        return (
          <TableActions>
            <Popconfirm
              onConfirm={() =>
                deleteUpstream(us.metadata!.name, us.metadata!.namespace)
              }
              title={'Are you sure you want to delete this upstream? '}
              okText='Yes'
              cancelText='No'>
              <TableActionCircle>x</TableActionCircle>
            </Popconfirm>
            <TableActionCircle onClick={() => startCreatingRoute(us)}>
              +
            </TableActionCircle>
          </TableActions>
        );
      }
    }
  ];
};

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: baseline;
`;
interface UpstreamCardData {
  cardTitle: string;
  cardSubtitle: string;
  onRemoveCard?: () => any;
  onExpand: () => void;
  details: {
    title: string;
    value: string;
    valueDisplay?: React.ReactNode;
  }[];
  healthStatus: number;
}
interface Props extends RouteComponentProps {
  //... eg, virtualservice?: string
}

export const UpstreamsListing = (props: Props) => {
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const [catalogNotTable, setCatalogNotTable] = React.useState<boolean>(true);
  const [
    upstreamForRouteCreation,
    setUpstreamForRouteCreation
  ] = React.useState<Upstream.AsObject | undefined>(undefined);
  const namespaces = React.useContext(NamespacesContext);
  let request = new ListUpstreamsRequest();

  // const { data, loading, error } = useGetUpstreamsList(request);
  request.setNamespacesList(namespaces.namespacesList);
  // const { data, loading, error } = useGetUpstreamsList(request);
  const { refetch: makeRequest } = useDeleteUpstream(null);
  const [upstreamsList, setUpstreamsList] = React.useState<Upstream.AsObject[]>(
    []
  );

  const {
    data,
    loading,
    error,
    setNewVariables,
    refresh,
    update,
    requestId
  } = useGetUpstreamsListV2({
    namespaces: namespaces.namespacesList
  });

  React.useEffect(() => {
    if (data && data.toObject().upstreamsList) {
      setUpstreamsList(data.toObject().upstreamsList);
    }
  }, [loading]);

  React.useEffect(() => {
    if (props.location.state && props.location.state.showSuccess) {
      props.location.state.showSuccess = false;
    }
  }, []);

  React.useEffect(() => {
    if (props.location.state && props.location.state.showSuccess) {
      setShowSuccessModal(true);
      setTimeout(() => {
        setNewVariables({ namespaces: namespaces.namespacesList });
      }, 1000);
    }
    return () => setShowSuccessModal(false);
  }, [props.location.state && props.location.state.showSuccess]);

  if (!data || (loading && requestId === 1)) {
    return <div>Loading...</div>;
  }

  const listDisplay = (
    strings: StringFilterProps[],
    types: TypeFilterProps[],
    checkboxes: CheckboxFilterProps[],
    radios: RadioFilterProps[]
  ) => {
    const nameFilterValue: string = strings.find(
      s => s.displayName === 'Filter By Name...'
    )!.value!;

    // group by type
    let upstreamsByType = groupBy(data.toObject().upstreamsList, u =>
      getUpstreamType(u)
    );
    let upstreamsByTypeArr = Array.from(upstreamsByType.entries());
    let checkboxesNotSet = checkboxes.every(c => !c.value!);
    return (
      <div>
        {catalogNotTable ? (
          upstreamsByTypeArr.map(([type, upstreams]) => {
            // show section according to type filter
            let groupedByNamespaces = Array.from(
              groupBy(upstreams, u => u.metadata!.namespace).entries()
            );

            if (
              checkboxesNotSet ||
              checkboxes.find(c => c.displayName === type)!.value!
            ) {
              const cardListingsData = groupedByNamespaces
                .map(([namespace, upstreams]) => {
                  return {
                    namespace,
                    cardsData: getUsableCatalogData(nameFilterValue, upstreams)
                  };
                })
                .filter(data => !!data.cardsData.length);

              if (!cardListingsData.length) {
                return null;
              }

              return (
                <SectionCard
                  cardName={type}
                  logoIcon={getIcon(type)}
                  key={type}>
                  {cardListingsData.map(data => (
                    <CardsListing
                      key={data.namespace}
                      title={data.namespace}
                      cardsData={data.cardsData}
                    />
                  ))}
                </SectionCard>
              );
            }
          })
        ) : (
          <SoloTable
            dataSource={getUsableTableData(
              nameFilterValue,
              data.toObject().upstreamsList,
              checkboxes
            )}
            columns={getTableColumns(
              setUpstreamForRouteCreation,
              deleteUpstream
            )}
          />
        )}
      </div>
    );
  };

  const getUsableCatalogData = (
    nameFilter: string,
    data: Upstream.AsObject[]
  ) => {
    const dataUsed: UpstreamCardData[] = data.map(upstream => {
      return {
        healthStatus: upstream.status
          ? upstream.status.state
          : healthConstants.Pending.value,
        cardTitle: upstream.metadata!.name,
        cardSubtitle: upstream.metadata!.namespace,
        onRemoveCard: () =>
          deleteUpstream(upstream.metadata!.name, upstream.metadata!.namespace),
        removeConfirmText: 'Are you sure you want to delete this upstream?',
        onExpand: () => {},
        details: [
          {
            title: 'Name',
            value: upstream.metadata!.name
          },
          {
            title: 'Namespace',
            value: upstream.metadata!.namespace
          },
          {
            title: 'Version',
            value: upstream.metadata!.resourceVersion
          },
          {
            title: 'Type',
            value: getUpstreamType(upstream)
          },

          {
            title: 'Status',
            value: getResourceStatus(upstream),
            valueDisplay: <HealthInformation healthStatus={upstream.status} />
          },
          ...(!!getFunctionInfo(upstream)
            ? [
                {
                  title: 'Functions',
                  value: getFunctionInfo(upstream)
                }
              ]
            : [])
        ],
        ...(!!getFunctionInfo(upstream) && {
          extraInfoComponent: () => <ExtraInfo upstream={upstream} />
        }),
        onCreate: () => setUpstreamForRouteCreation(upstream)
      };
    });

    return dataUsed.filter(row => row.cardTitle.includes(nameFilter));
  };

  const getUsableTableData = (
    nameFilter: string,
    data: Upstream.AsObject[],
    checkboxes: CheckboxFilterProps[]
  ) => {
    const dataUsed = data.map(upstream => {
      return {
        ...upstream,
        status: upstream.status,
        type: getUpstreamType(upstream),
        name: upstream.metadata!.name,
        key: `${upstream.metadata!.name}-${upstream.metadata!.namespace}`,
        actions: upstream
      };
    });
    let checkboxesNotSet = checkboxes.every(c => !c.value!);

    return dataUsed
      .filter(row => row.name.includes(nameFilter))
      .filter(row => {
        return (
          checkboxes.find(c => c.displayName === row.type)!.value! ||
          checkboxesNotSet
        );
      });
  };

  function deleteUpstream(name: string, namespace: string) {
    setUpstreamsList(usList => usList.filter(us => us.metadata!.name !== name));
    let deleteRequest = new DeleteUpstreamRequest();
    let ref = new ResourceRef();
    ref.setName(name);
    ref.setNamespace(namespace);
    deleteRequest.setRef(ref);
    makeRequest(deleteRequest);
  }

  return (
    <div>
      <Heading>
        <Breadcrumb />
        <Action>
          <CreateUpstreamModal toggleSuccessModal={setShowSuccessModal} />
          <SuccessModal
            visible={showSuccessModal}
            successMessage='Upstream added successfully'
          />
          <CatalogTableToggle
            listIsSelected={!catalogNotTable}
            onToggle={() => {
              setCatalogNotTable(cNt => !cNt);
            }}
          />
        </Action>
      </Heading>
      <ListingFilter
        strings={StringFilters}
        checkboxes={CheckboxFilters}
        filterFunction={listDisplay}
      />
      <SoloModal
        visible={!!upstreamForRouteCreation}
        width={500}
        title={'Create Route'}
        onClose={() => setUpstreamForRouteCreation(undefined)}>
        <CreateRouteModal
          defaultUpstream={upstreamForRouteCreation}
          completeCreation={() => setUpstreamForRouteCreation(undefined)}
        />
      </SoloModal>
    </div>
  );
};
