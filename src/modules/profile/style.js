import styled, { keyframes } from "styled-components";

// Animations
const textName = keyframes`
  0% {
      color:rgba(0,0,0,0.7);
      font-family: "ONNIC Outline";
  }
  100% {
    font-family: "monoton";
  }

`;

export const Container = styled.div`
  max-width: ${(props) => (props.fluid ? "100%" : 1300)};
  width: 100%;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  margin: 20px 0 30px;
  /* animation: ${textName} 2s linear 1s; */
`;

export const ProfileImage = styled.div`
  width: 30%;
  padding: 30px;
  background: #2fb3cd;
  display: flex;
  justify-content: center;
  .image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const ProfileInfo = styled.div`
  width: 70%;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
  }
  strong {
    font-size: 2rem;
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
