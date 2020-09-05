import styled from "styled-components";

/*
 *  Menu button and close menu button
 */

export const Menu = styled.button`
  color: red;
  padding: 10px 20px;
  background: #000;
  border: 0;
  color: #fff;
  width: 90px;
  height: 60px;
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
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 30%;
  &.close {
    display: none;
  }
  .close {
    padding: 20px;
    float: right;
  }
  ul {
    list-style: none;
    margin: 0;
    clear: both;
  }
  li {
    margin-bottom: 15px;
  }
  a {
    color: #fff;
    &:hover {
      color: #f8cf4a;
    }
  }
`;
