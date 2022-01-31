import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

import { formatAsCSSVariables } from '../../utils';
import { COLORS, WEIGHTS } from '../../constants';

const colorsStyle = formatAsCSSVariables('color', COLORS);
const weightsStyle = formatAsCSSVariables('weight', WEIGHTS);

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <Wrapper style={{ ...colorsStyle, ...weightsStyle }}>
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
`;

export default App;
