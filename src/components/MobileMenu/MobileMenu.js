/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => (
  <Overlay isOpen={isOpen} onDismiss={onDismiss}>
    <Content aria-label="Menu">
      <Top>
        <UnstyledButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>
            Dismiss modal
          </VisuallyHidden>
        </UnstyledButton>
      </Top>

      <Nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </Nav>

      <Bottom>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
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
  background: rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  width: clamp(240px, 80%, 300px);
  height: 100%;
  margin-left: auto;
  padding: 32px 22px 32px 32px;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  a {
    font-size: ${18 / 16}rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-gray-900);

    &:hover {
      color: var(--color-secondary);
      text-decoration: revert;
    }

    &:focus {
      outline-offset: 8px;
      outline: 2px solid var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 14px;

  a {
    font-size: ${14 / 16}rem;
    font-weight: 500;
    color: var(--color-gray-700);
    text-decoration: none;

    &:hover {
      text-decoration: revert;
    }

    &:focus {
      outline-offset: 4px;
      outline: 2px solid;
    }
  }
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Bottom = styled.div`
  flex: 1;
`;

export default MobileMenu;
