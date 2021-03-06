import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useState, useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { Link } from 'gatsby';
import { colors, breakpoints } from '../../../styles/theme';
import FlyoutMenu from './flyoutMenu';

import Button from '../../Common/buttons/PrimaryButton';
import MobileMenu from './mobileMenu';
import LargeLogo from '../../../components/Common/svgs/LargeLogo';
import MenuImageSrc from '../../../assets/images/icons/menu.svg';
import ChevronDown from '../../../assets/images/icons/chevron-down.svg';

const Container1 = styled.div`
  position: relative;
  background-color: ${colors.white};
`;

const LogoWrapper = styled.div`
  @media (min-width: ${breakpoints.large}) {
    width: 0;
    flex: 1 1 0%;
  }
`;

const MenuWrapper = styled.div`
  margin-right: -0.5rem;
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
  @media (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const MenuButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: ${colors.gray400};
  &:hover {
    color: ${colors.gray500};
    background-color: ${colors.gray100};
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: ${colors.gray500};
    background-color: ${colors.gray100};
  }
`;

const MenuImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: center;
    flex-basis: 60%;
  }
`;

const SolutionsWrapper = styled.div`
  position: relative;
`;

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(0.25rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const FlyoutMenuWrapper = styled.div`
  animation: ${fadeInUp} 0.3s ease-in forwards;
`;

const ButtonWrapper = styled.div`
  display: none;
  @media (min-width: ${breakpoints.medium}) {
    display: flex;
    flex: 1 1 0%;
  }
  @media (min-width: ${breakpoints.large}) {
    width: 0;
  }
  align-items: center;
  justify-content: flex-end;
  margin-left: 2rem;
`;

const ButtonSpan = styled.span`
  display: inline-flex;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const SolutionsButton = styled.div`
  color: ${colors.gray500};
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${colors.gray900};
  }
  &:focus {
    color: ${colors.gray900};
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const Chevron = styled.img`
  margin-left: 8px;
  color: ${colors.gray500};
  height: 1.25rem;
  width: 1.25rem;

  &:hover ${SolutionsButton} {
    color: ${colors.gray500};
  }
  &:focus ${SolutionsButton} {
    color: ${colors.gray500};
  }
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  @media (min-width: ${breakpoints.small}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: ${breakpoints.medium}) {
    justify-content: flex-start;
  }
  * {
    margin-right: 10px;
  }
`;

const Header = () => {
  const ref = useRef();
  const refMobile = useRef();
  const [menu, toggleMenu] = useState(false);
  const [mobileMenu, toggleMobileMenu] = useState(false);

  const mobileMenuHandler = () => (mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true));

  useOutsideClick(ref, () => toggleMenu(false));
  useOutsideClick(refMobile, () => toggleMobileMenu(false));

  return (
    <Container1>
      <Container2>
        <LogoWrapper>
          <Link to="/">
            <LargeLogo />
          </Link>
        </LogoWrapper>
        <MenuWrapper ref={refMobile}>
          <MenuButton onClick={mobileMenuHandler}>
            <MenuImage src={MenuImageSrc} alt="menu" />
          </MenuButton>
          {mobileMenu ? <MobileMenu mobileMenuHandler={mobileMenuHandler} /> : null}
        </MenuWrapper>
        <Nav>
          <SolutionsWrapper onMouseOver={() => toggleMenu(true)} ref={ref}>
            <SolutionsButton type="button">
              Solutions
              <Chevron src={ChevronDown} alt="down arrow" />
            </SolutionsButton>

            {menu ? (
              <FlyoutMenuWrapper>
                <FlyoutMenu />
              </FlyoutMenuWrapper>
            ) : null}
          </SolutionsWrapper>

          <Link className="header_link" activeClassName="header_active_link" to="/pricing">
            Pricing
          </Link>

          <Link className="header_link" activeClassName="header_active_link" to="/app/1/dashboard">
            App
          </Link>
          <Link className="header_link" activeClassName="header_active_link" to="/purchase">
            Purchase
          </Link>
          <Link className="header_link" activeClassName="header_active_link" to="/user/dashboard">
            User
          </Link>
        </Nav>
        <ButtonWrapper>
          <ButtonSpan>
            <Link to="/auth/login">
              <Button>Sign-In</Button>
            </Link>
          </ButtonSpan>
        </ButtonWrapper>
      </Container2>
    </Container1>
  );
};

export default Header;
