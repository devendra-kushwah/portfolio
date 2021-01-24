import styled from "styled-components";
import { tabletLView, desktopView } from "../../style/breakpoints";

/*
 *  Menu button and close menu button
 */

export const Menu = styled.button`
  border: 0;
  color: #276b79;
  width: 60px;
  height: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;
`;
export const HeaderTag = styled.header``;

/*
 *  Navigation
 */

export const NavBar = styled.nav`
  /* position: fixed;
  top: 0;
  left: -70%;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff; */

  &.open {
    /* width: 100%;
    left: 0; */
    /* &:before {
      content: "";
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -1;
    } */
    /* @media ${desktopView} {
      width: 25%;
    } */
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    /* clear: both; */
  }
  li {
    margin: 0 10px;
    text-align: center;
  }
  a {
    color: #276b79;
    font-size: 18px;
    line-height: 2;
    text-transform: capitalize;
    display: block;
    &:hover,
    &.active {
      color: #f8cf4a;
    }
  }
  button.close {
  }
`;
