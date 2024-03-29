import React from "react";
import { Container, Row, RightLayout, LeftLayout, SocialNav } from "./style";
// import Header from "./Header";
import { SocialYoutubeCircular } from "@styled-icons/typicons/SocialYoutubeCircular";
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle";
import { SocialGithub } from "@styled-icons/foundation/SocialGithub";
import Navigation from "./Header/Navigation";

const Layout = (props) => {
  return (
    <>
      {/* <Header /> */}
      <Container fluid>
        <Row>
          <LeftLayout className="col profile-image">
            <div>
              <div className="info">
                <img
                  src="/assets/dev.jpeg"
                  alt="Devendra kushwaha, kumar, full stack, ui, frontend"
                />
              </div>
              <SocialNav>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialYoutubeCircular size="48" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterWithCircle size="40" />
                </a>
                <a href="https://github.com/" rel="noopener noreferrer">
                  <SocialGithub size="48" />
                </a>
              </SocialNav>
              <Navigation />
            </div>
          </LeftLayout>
          <RightLayout className="col profile-info" bg="#64b5b7" color="#fff">
            {props.children}
          </RightLayout>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
