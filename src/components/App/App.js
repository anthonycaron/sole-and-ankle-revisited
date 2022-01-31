import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

import { cssVariables } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <Wrapper style={cssVariables}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main`
  padding: 64px 32px;

  @media ${p => p.theme.queries.tablet} {
    padding: 48px 32px;
  }

  @media ${p => p.theme.queries.phone} {
    padding: 48px 16px;
  }
`;

export default App;
