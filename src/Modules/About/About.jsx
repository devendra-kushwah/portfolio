import React from "react";
import Layout from "../../Layout";

const About = () => {
  return (
    <Layout>
      <div>
        <h1 className="page-title">About</h1>
        <p>
          I had started my journey as a Front-end developer in July 2017 and I
          have covered almost all the front-end areas like theming(Magento,
          Drupal), static web pages, JS framework web applications
        </p>
        <div className="more-info">
          <h2>Spaciality</h2>
          <ul className="description">
            <li>PSD to HTMl pixel perfect</li>
            <li>Strong knowladge of W3C Markup standard</li>
            <li>Pixel perfect React application </li>
            <li>Resposive design</li>
            <li>Excellent code stanard</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
