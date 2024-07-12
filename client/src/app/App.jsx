import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../page/mainPage/MainPage';
import Navbar from '../page/navbar/Navbar';
import requestAxios from '../services/axios';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import Registration from '../page/auth/Registration';
import Authorization from '../page/auth/Authorization';
import { setAccessToken } from '../services/axios';
import Profile from '../page/profiePage/Profile';
import Cats from '../page/CatPage/Cats';
import Targets from '../page/targetPage/Targets';






function App() {


  const [user, setUser] = useState('');

  const axiosUsers = async (id) => {
    const { data } = await requestAxios.get(`/users/${id}`);
      if (data.message === 'success') {
      setUser(data.users);
    }
  };
  const AxiosChekUser = async () => {
    const { data } = await requestAxios.get('/tokens/refresh');
    if (data.message === 'success') {
      setUser(data.user);
      setAccessToken(data.accessToken);
    }
  };

  useEffect(() => {

    AxiosChekUser();
    axiosUsers();
  }, []);

  return (

    <div>
      <Navbar user={user} setUser={setUser} />
      
      <Routes>
       
       <Route path="/" element={<MainPage />} />
       <Route path="/Authorization" element={<Authorization setUser={setUser} />} />
       <Route path="/Registration" element={<Registration setUser={setUser} />} />
       <Route path="/profile" element={<Profile user={user}/>} />
       <Route path="/cats" element={<Cats user={user}/>} />
       <Route path="/targets" element={<Targets />} />

       <Route path='*' element={<ErrorPage />} />
    
   </Routes>

 </div>

  )
}

export default App;