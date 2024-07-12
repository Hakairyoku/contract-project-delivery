import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';


function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const onHandleLogout = async () => {
    const { data } = await requestAxios.get('/auth/logout');
    console.log(data);
    if (data.message === 'success') {
      setAccessToken(undefined);
      setUser(undefined);
      navigate('/');
    }
  };

  return (
    <nav>
      <NavLink to='/' end>
    Главная
      </NavLink>
      {user && (
        <NavLink to='/profile'>
          Профиль
        </NavLink>
      )}
      {user ? (
        <div>
          <p >{`${user.name}`}</p>

          <button onClick={onHandleLogout}>
            Выход
          </button>
        </div>
      ) : (
        <div>
             <NavLink to='/authorization'>
            Вход
          </NavLink>
          <n> </n>
          

          <NavLink to='/registration'>
            Регистрация
          </NavLink>
         
        </div>
      )}
    </nav>
  );
}
export default Navbar;