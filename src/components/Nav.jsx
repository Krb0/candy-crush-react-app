import React from "react";
import StyledNav from "../styles/StyledNav";
const Nav = ({ avatar, name }) => {
  return (
    <StyledNav>
      <img src={avatar} alt="avatar" />
      <h2>{name}</h2>
    </StyledNav>
  );
};

export default Nav;
