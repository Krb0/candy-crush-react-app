import React from "react";
import styled from "styled-components";
import BlueCandy from "../images/blue-candy.png";
const Nav = ({ avatar, name }) => {
  return (
    <StyledNav>
      <img src={avatar} />
      <h2>{name}</h2>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  padding: 0 2rem;
  display: flex;
  width: 100vw;
  height: 80px;
  background-color: #767676;
  img {
    margin-right: 1rem;
    width: 60px;
    height: 60px;
  }
`;
