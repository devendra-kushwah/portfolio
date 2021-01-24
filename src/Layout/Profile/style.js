import styled from "styled-components";
import { tabletLView, desktopView } from "../../style/breakpoints";

export const ProfileInfo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;

  @media ${desktopView} {
    width: 200px;
    height: 200px;
  }
`;
export const SocialNav = styled.div`
  text-align: center;
  a {
    /* color: #2fb3cd; */
    color: #276b79;
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #f8cf4a;
    }

    @media ${tabletLView} {
      /* color: #fff; */
    }
  }
`;
