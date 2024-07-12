import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';
import "./Authorization.css"

function Authorization({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const validation = (email, password) => {
    if (email.trim() === '' || password.trim() === '') {
      setError("Заполните поле");
      return false;
    }
    return true;
  };

  const onHadleSubmit = async (e) => {
    e.preventDefault();

    if (!validation(email, password)) {
      return;
    }

    try {
      const { data } = await requestAxios.post('/auth/authorization', {
        email,
        password,
      });

      if (data.message === 'success') {
        setUser(data.user);
        setAccessToken(data.accessToken);
        navigate('/profile');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Что-то пошло не так');
    }
  };

  return (
    <div>
      <h1></h1>
      <form className='auth' onSubmit={onHadleSubmit}>
        <label htmlFor='email'>
          <input
            type='email'
            placeholder='sweetCat@magic.wow'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <span>{error && <p>{error}</p>}</span>
        <button type="submit">Поймать котика!</button>
      </form>
    </div>
  );
}

export default Authorization;
