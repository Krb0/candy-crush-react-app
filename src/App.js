import React, { useState, useRef, useEffect } from "react";
import GameApp from "./GameApp";
import Nav from "./components/Nav";
import getName from "./handlers/getName";
import getAvatar from "./handlers/getAvatar";
const App = () => {
  const [name, setName] = useState(getName);
  const [avatar, setAvatar] = useState(getAvatar);
  const nameInput = useRef();
  const avatarInput = useRef();
  useEffect(() => {
    localStorage.setItem("nameCandy", name);
  }, [name]);
  useEffect(() => {
    localStorage.setItem("avatarCandy", avatar);
  }, [avatar]);
  return (
    <div className="App">
      <Nav name={name} avatar={avatar} />
      <GameApp></GameApp>
      <input placeholder="Ingrese su nombre" ref={nameInput} />
      <br />
      <input placeholder="Ingrese su Avatar" ref={avatarInput} />
      <br />
      <button
        onClick={() => {
          const nameVal = nameInput.current.value;
          const avatarVal = avatarInput.current.value;
          setName(nameVal);
          setAvatar(avatarVal);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default App;
