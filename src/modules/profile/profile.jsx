import React, { useEffect } from "react";
import { Container, Row, H1, ProfileInfo, ProfileImage } from "./style";

const Profile = () => {
  useEffect(() => {
    const title = document.querySelector("h1").innerText;
    const xx = title.split("");

    xx.map((string, index) => {
      console.log("iteam", string);
      return <>{string}</>;
    });
  });

  return (
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
          <strong>Hello, There</strong>
          <H1>I'm Devendra Kushwaha</H1>
          <h3>I am a Frontend developer</h3>
        </ProfileInfo>
      </Row>
    </Container>
  );
};
export default Profile;
