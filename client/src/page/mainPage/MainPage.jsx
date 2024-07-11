import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import App from "../../app/App";
import NavBar from "../navBar/NavBar";
function MainPage() {
  return (
    <>
    <header><NavBar /></header>
      <h1>Хочешь ласковую киску? Заходи</h1>
      <Link to="/Authorization">Войти </Link>
      <Link to="/Registration">Зарегистрироваться </Link>
      <footer>
        <h3>Pussy Search©</h3>
      </footer>
    </>
  );
}

export default MainPage;
