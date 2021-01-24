import React from "react";
import { Container, Row, RightLayout, LeftLayout, SocialNav } from "./style";
// import Header from "./Header";

import Profile from "./Profile";
// import Navigation from "./Header/Navigation";

const Layout = (props) => {
  return (
    <>
      {/* <Header /> */}
      <Container fluid>
        <Row>
          <LeftLayout className="col profile-image">
            <div>
              <Profile />
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
