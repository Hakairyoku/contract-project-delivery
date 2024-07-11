import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../../app/App";

function MainPage({ title }) {
 
  return (
    <div>
    <h1>Хочешь ласковую киску? Заходи</h1>
      <Link to="/Autorization">Авторизация</Link>
      <Link to="/Registration">Регистрация</Link>
      <h2></h2>
    </div>
  );
}



export default MainPage;
