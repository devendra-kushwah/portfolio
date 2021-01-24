import React from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "./style";

const routeLinks = [
  "",
  "home",
  "about",
  "blogs",
  "skills",
  "work",
  "weekend-work",
];

const Navigation = (props) => {
  const { menuClass, children } = props;
  return (
    <NavBar className={`navigation ${menuClass}`}>
      {children}
      <ul>
        {routeLinks.map((link) => (
          <li key={link}>
            <NavLink exact className="transition nav-link" to={`/${link}`}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavBar>
  );
};

export default Navigation;
