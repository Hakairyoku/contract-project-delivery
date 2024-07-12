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
    Main
      </NavLink>
      {user && (
        <NavLink to='/profile'>
          Profile
        </NavLink>
      )}
      {user ? (
        <div>
          <p >{`${user.name}`}</p>

          <button onClick={onHandleLogout}>
            LogOut
          </button>
        </div>
      ) : (
        <div>
             <NavLink to='/authorization'>
            LogIn
          </NavLink>

          <NavLink to='/registration'>
            SignUp
          </NavLink>
         
        </div>
      )}
    </nav>
  );
}
export default Navbar;