import React from "react";
import { Container, Row, H1, ProfileInfo, ProfileImage } from "./style";
import Header from "./Header";
const Layout = (props) => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <ProfileImage className="col profile-image">
            <div className="image">
              <img
                src="/assets/dev.jpeg"
                alt="Devendra kushwaha, kumar, full stack, ui, frontend"
              />
            </div>
          </ProfileImage>
          <ProfileInfo className="col profile-info">
            {props.children}
          </ProfileInfo>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
