import React from "react";
import Layout from "../../Layout";
import { Ul } from "./style";
import {
  LogoJavascript,
  LogoReact,
  LogoHtml5,
  LogoCss3,
  LogoSass,
} from "@styled-icons/ionicons-solid";
import {
  Apollographql,
  Grunt,
  Gulp,
  StyledComponents,
  Magento,
} from "@styled-icons/simple-icons";
import { Less, Drupal } from "@styled-icons/fa-brands";

import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";

const Skills = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">My skills</h1>
        <h2>Languages: </h2>
        <Ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              title="javaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoJavascript size="80" />
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              title="Html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoHtml5 size="80" />
            </a>
          </li>
          <li>
            <a
              href="https://www.apollographql.com/docs/tutorial/introduction/"
              title="Apollo graphql"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Apollographql size="80" />
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              title="Css3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoCss3 size="80" />
            </a>
          </li>
        </Ul>
        <h2>Frameworks/Libraries :</h2>
        <Ul>
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              title="React js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoReact size="80" />
            </a>
          </li>

          <li>
            <a
              href="https://react-bootstrap.github.io/getting-started/introduction"
              title="React Bootstrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Bootstrap size="80" />
            </a>
          </li>

          <li>
            <a
              href="https://styled-components.com/"
              title="Styled components"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledComponents size="80" />
            </a>
          </li>
          <li>
            <a
              href="http://lesscss.org/"
              title="Less"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Less size="80" />
            </a>
          </li>
          <li>
            <a
              href="https://sass-lang.com/"
              title="Sass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoSass size="80" />
            </a>
          </li>
        </Ul>
        <h2>Others:</h2>
        <Ul>
          <li>
            <a
              href="https://gruntjs.com/"
              title="Grunt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grunt size="80" />
            </a>
          </li>
          <li>
            <a
              href="https://gulpjs.com/"
              title="Gulp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gulp size="80" />
            </a>
          </li>
        </Ul>
        <h2>CMS :</h2>
        <Ul>
          <li>
            <a
              href="https://magento.com/"
              title="Magento"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Magento size="80" />
            </a>
          </li>
          <li>
            <a
              href="https://www.drupal.org/"
              title="Drupal 8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Drupal size="80" />
            </a>
          </li>
        </Ul>
      </div>
    </Layout>
  );
};

export default Skills;
