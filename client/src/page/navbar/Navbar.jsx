import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';
import './Navbar.css';

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
      <NavLink to='/' end className='nav-link'>
        Главная
      </NavLink>
      {user && (
        <NavLink to='/profile' className='nav-link'>
          Профиль
        </NavLink>
      )}
      {user ? (
        <div className='user-container'>
          <p className='user-name'>{`${user.name}`}</p>
          <button
            onClick={onHandleLogout}
            className='logout-button'
          >
            Выход
          </button>
        </div>
      ) : (
        <div className='user-container'>
          <NavLink to='/authorization' className='nav-link'>
            Вход
          </NavLink>
          <NavLink to='/registration' className='nav-link'>
            Регистрация
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
