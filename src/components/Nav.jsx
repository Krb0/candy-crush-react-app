import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import StyledNav from "../styles/StyledNav";
const Nav = ({ avatar, name, hidden, setHidden }) => {
  return (
    <StyledNav>
      <div className="user-div">
        <img src={avatar} alt="avatar" />
        <h2>{name}</h2>
      </div>

      <FontAwesomeIcon icon={faUser} onClick={() => setHidden(!hidden)} />
    </StyledNav>
  );
};

export default Nav;
