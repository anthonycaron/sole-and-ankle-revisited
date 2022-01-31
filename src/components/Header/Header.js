import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />

      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <Nav>
          <NavLink href="/sale">À vendre</NavLink>
          <NavLink href="/new">Nouvelles versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <IconsWrapper>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Shopping bag</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </IconsWrapper>

        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${p => p.theme.queries.tablet} {
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${p => p.theme.queries.phone} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    9.2vw - 4.5rem,
    3.5rem
  );
  margin: 0px 48px;

  @media ${p => p.theme.queries.tablet} {
    display: none;
  }
`;

const IconsWrapper = styled.div`
  display: none;

  @media ${p => p.theme.queries.tablet} {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 32px;
  }

  @media ${p => p.theme.queries.phone} {
    gap: 16px;
  }
`

const Side = styled.div`
  flex: 1;

  @media ${p => p.theme.queries.tablet} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
