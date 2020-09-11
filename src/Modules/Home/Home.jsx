import React, { useEffect } from "react";
import { H1 } from "./style";
import Layout from "../../Layout";

const Profile = () => {
  // useEffect(() => {
  //   const title = document.querySelector("h1").innerText;
  //   const xx = title.split("");

  //   xx.map((string, index) => {
  //     console.log("iteam", string);
  //     return <>{string}</>;
  //   });
  // });

  return (
    <>
      <Layout>
        <strong>Hello, There</strong>
        <H1>I'm Devendra Kushwaha</H1>
        <h3>I am a Full-stack developer</h3>
        <div className="download-cv">
          <a href="/#" className="button">
            Download cv
          </a>
        </div>
      </Layout>
    </>
  );
};
export default Profile;
