import React from 'react'
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Registration from '../page/auth/Registration';
import Authorization from '../page/auth/Authorization';
import MainPage from '../page/mainPage/MainPage';
import NavBar from '../page/navBar/NavBar';

import './App.css'

function App() {
  return (
    <div>

      <Routes>
       
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Authorization" element={<Authorization />} /> 
          {/* <Route path='*' element={<ErrorPage />} /> */}
          <Route path="/" element={<MainPage />} />
      </Routes>

      <div className='container'><Outlet /></div>
    </div>
  )
}

export default App