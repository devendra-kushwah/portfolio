import styled from "styled-components";
import { tabletLView, desktopView } from "../style/breakpoints";

export const Container = styled.div`
  max-width: ${(props) => (props.fluid ? "100%" : 1300)};
  width: 100%;
  margin: 0 auto;
`;

export const Row = styled.div`
  @media ${tabletLView} {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  margin: 20px 0;
`;

export const LeftLayout = styled.div`
  padding: 30px;
  position: relative;
  z-index: 2;
  /* Media  */
  @media ${tabletLView} {
    width: 25%;
    display: flex;
    justify-content: center;
    background: #fff;
    border-right: 1px solid #fff;
  }
  .info {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;

    @media ${desktopView} {
      width: 200px;
      height: 200px;
    }
  }
`;

//-------------- Right column style

export const RightLayout = styled.div`
  padding: 30px;
  text-align: center;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg || "#ccc"};
  color: ${(props) => props.color || ""};
  height: calc(100vh - 291px);
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0px;
    top: 0;
    bottom: 0;
    background: #276b79;
    z-index: -1;
    transform: skewX(124.5deg);
    transform-origin: top;
  }
  @media ${tabletLView} {
    width: 75%;
    text-align: left;
    height: 100vh;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 18px;
    @media ${tabletLView} {
      font-size: 25px;
    }
  }
  strong {
    font-size: 20px;
    position: relative;
    padding-left: 10px;
    letter-spacing: 1.4px;
    &:before {
      content: "";
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f8cf4a;
      z-index: -1;
      left: 0px;
      top: -10px;
    }
  }
`;
export const SocialNav = styled.div`
  text-align: center;
  margin-bottom: 20px;
  a {
    /* color: #2fb3cd; */
    color: #276b79;
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px;

    @media ${tabletLView} {
      /* color: #fff; */
    }
  }
`;
