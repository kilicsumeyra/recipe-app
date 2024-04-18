import React, { useState } from "react";
import Nav, { Brand, Hamburger, Menu, MenuLink } from "./Navbar.style";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiTimes } from "react-icons/ti";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"Eypes - "}</i>
        <span>Recipe</span>
      </Brand>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <TiTimes /> : <RxHamburgerMenu />}
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="/" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
