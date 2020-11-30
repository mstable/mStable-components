import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../assets/svg/mstable.svg';

const Container = styled.div<{ inverted: boolean }>`
  height: 48px;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  width: 500px;
  background: blue;
`;

const Logo = styled.div<{ inverted?: boolean }>`
  a {
    border-bottom: 0;
  }

  svg {
    width: 20px;
    height: 24px;

    path,
    rect {
      fill: ${({ theme, inverted }) => (inverted ? theme.color.white : 'auto')};
    }
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Inner = styled.div`
  padding: 0 20px;
  height: 100%;
`;

interface Props {
  inverted?: boolean;
}

export const AppBar: React.FC<Props> = ({ children, inverted = false }) => {
  return (
    <Container inverted={inverted}>
      <Inner>
        <Top>{children}</Top>
      </Inner>
      <Logo inverted={inverted}>
        {/* <Link to="/" title="Home" onClick={closeAccount}> */}
        <LogoSvg />
        {/* </Link> */}
        {/* <Buttons>
            <NotificationsButton />
            <WalletButton />
          </Buttons> */}
      </Logo>
      {/* <StatusWarningsRow /> */}
    </Container>
  );
};
