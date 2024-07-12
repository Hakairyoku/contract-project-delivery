import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import requestAxios, { setAccessToken } from '../../services/axios';
import "./Registration.css"




function Registration({ setUser }) {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [role, setRole] = useState(false);
  const [sausage, setSausage] = useState(100); // Начальное значение 100

  const navigate = useNavigate();

  const validation = (name, email, password) => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || cpassword.trim() === '') {
      setError('Заполните все поля');
      return false;
    }
    if (password !== cpassword) {
      setError('Пароли не совпадают');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation(name, email, password)) {
      return;
    }

    try {
      const { data } = await requestAxios.post('/auth/registration', {
        name,
        email,
        password,
        role,
        sausage,
      });

      if (data.message === 'success') {
        setAccessToken(data.accessToken);
        setUser(data.user);

        // Сохраняем количество сосисок в localStorage
        localStorage.setItem('sausage', sausage.toString());
        navigate('/profile');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Что-то пошло не так');
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form className='auth' onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Имя:
          <input
            type='text'
            placeholder='Имя'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            type='email'
            placeholder='example@mail.ru'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          Пароль:
          <input
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='cpassword'>
          Повторите пароль:
          <input
            type='password'
            placeholder='Повторите пароль'
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </label>
        <label htmlFor='role'>
          Роль:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value={false}>Волшебник</option>
            <option value={true}>Охотник</option>
          </select>
        </label>
        <span>{error && <p>{error}</p>}</span>
        <button type='submit'>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
