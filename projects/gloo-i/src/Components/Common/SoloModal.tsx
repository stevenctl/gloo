import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';
import { colors, soloConstants } from '../../Styles';
import { ReactComponent as CloseX } from 'assets/close-x.svg';

const ModalWindow = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  justify-content: center;
  align-content: center;
  background: rgba(0, 0, 0, 0.1);
  overflow: auto;
  line-height: 19px;
`;

const BlockHolder = styled.div`
  max-height: 80vh;
`;

interface ContentProps {
  width: number | string;
}
const ModalBlock = styled<'div', ContentProps>('div')`
  position: relative;
  width: ${props =>
    props.width === 'auto' ? props.width : `${props.width}px`};
  border-radius: 10px;
  background: white;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.novemberGrey};
  line-height: normal;
  padding: ${soloConstants.largeBuffer}px ${soloConstants.smallBuffer}px 13px;
`;

const CloseXContainer = styled.div`
  position: absolute;
  display: flex;
  right: 16px;
  top: 16px;

  > svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 0 ${soloConstants.smallBuffer}px ${soloConstants.largeBuffer}px;
`;

interface ModalProps {
  visible: boolean;
  width: number;
  title: string | React.ReactNode;
  children: React.ReactChild;
  onClose: () => any;
}

export const SoloModal = (props: ModalProps) => {
  const { visible, width, title, children, onClose } = props;

  if (!visible) {
    document.body.style.overflow = 'auto';
    return <React.Fragment />;
  }

  document.body.style.overflow = 'hidden';

  return (
    <ModalWindow onClick={onClose}>
      <BlockHolder onClick={evt => evt.stopPropagation()}>
        <ModalBlock width={width}>
          <CloseXContainer onClick={onClose}>
            <CloseX />
          </CloseXContainer>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </ModalBlock>
      </BlockHolder>
    </ModalWindow>
  );
};
