import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import normalize from '../styles/normalize';

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr min(75ch, 100%) 1fr;

  & > * {
    grid-column: 2;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LayoutProps {
  className?: string;
}
const GlobalStyle = createGlobalStyle`${normalize}`;

const Layout: React.FC<LayoutProps> = ({ children, className }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700|Montserrat:300,400,700|Material+Icons+Outlined"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <StyledLayout className={className}>
      <Page>{children}</Page>
    </StyledLayout>
  </>
);

export default Layout;
