import React, { useState } from "react";
import Navigation from "./Navigation";
import { Menu, HeaderTag } from "./style";

import { Menu4 } from "@styled-icons/remix-line/Menu4";
import { Close } from "@styled-icons/evil/Close";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const menu = () => setOpen(true);

  const closeMenu = () => setOpen(false);

  return (
    <HeaderTag>
      {!isOpen && (
        <Menu onClick={menu}>
          <Menu4 size="40" />
        </Menu>
      )}
      <Navigation menuClass={`transition ${isOpen ? "open" : "close"}`}>
        <Menu onClick={closeMenu} className="close">
          <Close size="40" />
        </Menu>
      </Navigation>
    </HeaderTag>
  );
};

export default Header;
