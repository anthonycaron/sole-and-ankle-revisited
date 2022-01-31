import React from 'react';
import styled from 'styled-components/macro';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  const breadcrumbsElt = (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">
        Shoes
      </Breadcrumbs.Crumb>
    </Breadcrumbs>
  );

  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <BreadcrumbsTabletWrapper>
              {breadcrumbsElt}
            </BreadcrumbsTabletWrapper>

            <Title>Running</Title>
          </div>

          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>

        <Spacer size={32} />

        <ShoeGrid />
      </MainColumn>

      <LeftColumn>
        {breadcrumbsElt}

        <Spacer size={42} />

        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${p => p.theme.queries.tablet} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${p => p.theme.queries.tablet} {
    align-items: flex-end;
  }
`;

const SelectWrapper = styled.div`
  @media ${p => p.theme.queries.phone} {
    display: none;
  }
`;

const BreadcrumbsTabletWrapper = styled.div`
  display: none;

  @media ${p => p.theme.queries.tablet} {
    display: revert;
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

export default ShoeIndex;
