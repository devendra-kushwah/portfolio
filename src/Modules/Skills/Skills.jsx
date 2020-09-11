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
} from "@styled-icons/simple-icons";
import { Less } from "@styled-icons/fa-brands/Less";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";

const Skills = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">My skills</h1>
        <Ul>
          <li>
            <LogoJavascript size="80" />
          </li>
          <li>
            <LogoReact size="80" />
          </li>
          <li>
            <Apollographql size="80" />
          </li>
          <li>
            <LogoHtml5 size="80" />
          </li>
          <li>
            <Bootstrap size="80" />
          </li>
          <li>
            <LogoCss3 size="80" />
          </li>
          <li>
            <StyledComponents size="80" />
          </li>
          <li>
            <Less size="80" />
          </li>
          <li>
            <LogoSass size="80" />
          </li>
          <li>
            <Grunt size="80" />
          </li>
          <li>
            <Gulp size="80" />
          </li>
        </Ul>
      </div>
    </Layout>
  );
};

export default Skills;
