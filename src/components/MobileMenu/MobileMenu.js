/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { cssVariables } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => (
  <Overlay isOpen={isOpen} onDismiss={onDismiss} style={cssVariables}>
    <Content aria-label="Menu">
      <Top>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>
            Dismiss modal
          </VisuallyHidden>
        </CloseButton>
      </Top>

      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>

      <Bottom>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Bottom>
    </Content>
  </Overlay>
);

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-gray-700);
`;

const Content = styled(DialogContent)`
  width: clamp(240px, 80%, 300px);
  height: 100%;
  margin-left: auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
`;

const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }

  &:focus {
    outline-offset: 4px;
  }
`;

const NavLink = styled(Link)`
  font-size: ${18 / 16}rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-gray-900);

  &:first-of-type,
  &:hover {
    color: var(--color-secondary);
  }

  &:focus {
    outline-offset: 8px;
    outline: 2px solid var(--color-secondary);
  }
`;

const FooterLink = styled(Link)`
  font-size: ${14 / 16}rem;
  font-weight: 500;
  color: var(--color-gray-700);

  &:focus {
    outline: 2px solid;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Footer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 9px;
`;

const Top = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Bottom = styled.div`
  flex: 1;
`;

export default MobileMenu;
