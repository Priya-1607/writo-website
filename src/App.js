import "./App1.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
// import NavBar from "./NavBar";
export default function App() {
  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  return (
    <div>
      <button onClick={togglePop} className="login">
        Login
      </button>
      {seen ? <LoginForm toggle={togglePop} /> : null}
    </div>
  );
}
