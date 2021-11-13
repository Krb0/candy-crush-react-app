import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 0rem 2rem;
  display: flex;
  width: 100vw;
  height: 110px;
  background-color: #242424;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  align-items: center;
  justify-content: space-between;

  .user-div {
    display: flex;
    align-items: center;
  }
  img {
    width: 90px;
    height: 90px;
    margin-right: 1rem;
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
  }
  svg {
    font-size: 2.5rem;
    margin-right: 7rem;
    cursor: pointer;
  }
  border-bottom: 5px solid #044da4;
  outline: 3px solid #2585fa;
`;
export default StyledNav;
