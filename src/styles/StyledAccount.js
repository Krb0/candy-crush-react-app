import styled from "styled-components";

const StyledAccount = styled.div`
  z-index: 1;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.96);
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  .input-div {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 3rem;
    h1 {
      width: 100px;
    }
    input {
      margin-left: 1rem;
      height: 1rem;
      align-self: center;
      padding: 12px 20px;
      font-size: 1rem;
      border: 1px solid black;
      border-radius: 1px;
      text-align: center;
      outline: transparent;
      width: 150px;
    }
  }
`;

export default StyledAccount;
