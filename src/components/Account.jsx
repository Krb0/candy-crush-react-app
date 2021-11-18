import StyledAccount from "../styles/StyledAccount";
const Account = ({ name, avatar, setName, setAvatar }) => {
  return (
    <StyledAccount onClick={(e) => e.stopPropagation()}>
      <div className="input-div">
        <h1>Name:</h1>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-div">
        <h1>Avatar:</h1>
        <input
          placeholder="Avatar url"
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
    </StyledAccount>
  );
};

export default Account;
