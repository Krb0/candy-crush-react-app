import React, { useState, useEffect } from "react";
import GameApp from "./GameApp";
import Nav from "./components/Nav";
import getName from "./handlers/getName";
import getAvatar from "./handlers/getAvatar";
import Account from "./components/Account";
const App = () => {
  const [name, setName] = useState(getName);
  const [avatar, setAvatar] = useState(getAvatar);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    localStorage.setItem("nameCandy", name);
  }, [name]);
  useEffect(() => {
    localStorage.setItem("avatarCandy", avatar);
  }, [avatar]);
  return (
    <div className="App">
      <Nav name={name} avatar={avatar} hidden={hidden} setHidden={setHidden} />
      <GameApp></GameApp>
      <div className={!hidden ? "hidden" : " "}>
        <Account
          name={name}
          avatar={avatar}
          setAvatar={setAvatar}
          setName={setName}
        />
      </div>
    </div>
  );
};

export default App;
