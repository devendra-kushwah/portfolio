import styled from "styled-components";
import { tabletLView } from "../../style/breakpoints";

/*
 *  Menu button and close menu button
 */

export const Menu = styled.button`
  background: transparent;
  border: 0;
  color: #fff;
  width: 80px;
  height: 60px;
  @media ${tabletLView} {
    background: #000;
  }
  &.close {
    float: right;
  }
`;
export const HeaderTag = styled.header`
  position: fixed;
  top: 0;
  right: 0;
`;

/*
 *  Navigation
 */

export const NavBar = styled.nav`
  /* position: fixed;
  top: 0;
  left: -70%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); */
  /* width: 70%;
  @media ${tabletLView} {
    width: 30%;
  } */

  /* &.open {
    left: 0;
  } */
  /* Button  */

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    clear: both;
    display: flex;
    justify-content: center;
  }
  li {
    margin: 0 10px;
  }
  a {
    /* color: #2fb3cd; */
    color: #276b79;
    font-size: 15px;
    @media ${tabletLView} {
      /* color: #fff; */
    }
    &:hover,
    &.active {
      color: #f8cf4a;
    }
  }
`;
