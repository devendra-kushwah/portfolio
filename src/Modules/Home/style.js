import styled from "styled-components";
import { tabletLView } from "../../style/breakpoints";

export const H1 = styled.h1`
  font-size: 30px;
  margin: 20px 0;
  font-size: 20px;
  @media ${tabletLView} {
    font-size: 30px;
  }
`;

export const Div = styled.div`
  .download-cv {
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10px;
  }
`;
