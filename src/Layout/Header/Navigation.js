import React from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "./style";

const Navigation = (props) => {
  const { menuClass } = props;

  return (
    <NavBar className={menuClass}>
      {/* {props.children} */}
      <ul>
        {/* <li>
          <NavLink className="transition" to="/" />
        </li> */}
        <li>
          <NavLink exact className="transition" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact className="transition" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact className="transition" to="/blogs">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink exact className="transition" to="/skills">
            Skills
          </NavLink>
        </li>
      </ul>
    </NavBar>
  );
};

export default Navigation;
