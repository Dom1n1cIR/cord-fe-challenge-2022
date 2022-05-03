import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
  @media screen and (max-width: 768px) {
    transform: ${(props) => (props.isVisible ? `translateX(0)` : `translateX(-100%)`)};
    transition: transform 1s ease;
  }
`

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: .8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover, &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active { 
    background: ${colors.primaryColor};
    opacity: 1;
  }
`
const MobileNavigation = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    cursor: pointer; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 25px;
    background-color: ${colors.lightBackground};
  }
`;

const NavigationTitle = styled.h1`
  padding-left: 15px;
  @media screen and (max-width: 768px) {
    font-weight: normal;
    padding-left: 25px;
  }
`;

const IconWrapper = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }
`;

export default function SideNavBar ({active, closeMenu}) {
  const [activeSideBar, setActiveSideBar] = useState(false);

  const handleMenuClose = () => {
    setActiveSideBar(false);
  };
  
  const handleMenuOpen = () => {
    setActiveSideBar(true);
  };

  return (
    <>
    <MobileNavigation>
      <AiOutlineMenu size={"2.5em"} color={colors.sideNavBar} onClick={handleMenuOpen}/>
      <NavigationTitle>Discover</NavigationTitle>
    </MobileNavigation>
    <SideNavBarCont isVisible={activeSideBar}>
      <IconWrapper>
        <AiOutlineClose size={"1.5em"} color={colors.lightBackground} onClick={handleMenuClose}/>
      </IconWrapper>
      <SideNavHeader>
        Wesley
        <img src={Arrow} alt="Arrow pointing down" />
      </SideNavHeader>
      <SideNavMainLink to="/discover" exact>
        Discover
        <img src={SearchWhite} alt="Magnifying glass" />
      </SideNavMainLink>
      <SideNavSectionTitle><HeaderText>Watched</HeaderText></SideNavSectionTitle>
      <NavLink to="/watched/movies">Movies</NavLink>
      <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
      <SideNavSectionTitle><HeaderText>Saved</HeaderText></SideNavSectionTitle>
      <NavLink to="/saved/movies">Movies</NavLink>
      <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
    </SideNavBarCont>
    </>
  );
}