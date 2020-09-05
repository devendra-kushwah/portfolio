import styled, { keyframes } from "styled-components";
import { tabletLView } from "../style/breakpoints";

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

export const ProfileImage = styled.div`
  padding: 30px;
  background: #2fb3cd;

  /* Media  */
  @media ${tabletLView} {
    width: 30%;
    display: flex;
    justify-content: center;
  }
  .image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    @media ${tabletLView} {
      width: 200px;
      height: 200px;
    }
  }
`;

//-------------- Right column style

export const ProfileInfo = styled.div`
  padding: 30px;
  @media ${tabletLView} {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  h3 {
    margin-bottom: 20px;
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
