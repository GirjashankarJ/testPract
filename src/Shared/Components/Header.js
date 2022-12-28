import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

export default function Header() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let usernameValue = localStorage.getItem("usernameValue");
    if (usernameValue) {
      setUsername(usernameValue);
    } else {
      navigate("/login");
    }
  }, []);

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="app-header">
      <h2>
        Hiiiiii, Welcome {username} <button onClick={logout}>Logout</button>
      </h2>
      <Link to={"/cat-fact"}>
        <MyButton label={"Cat Fact"}></MyButton>
      </Link>
      <Link to={"/posts"}>
        <MyButton label={"Post"}></MyButton>
      </Link>
      <Link to={"/login"}></Link>
      <hr></hr>
    </div>
  );
}
