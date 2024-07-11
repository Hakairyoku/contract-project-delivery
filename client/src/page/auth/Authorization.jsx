import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';

function Authorization({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function validation(email, password ) {
    if (email.trim() === '' || password.trim() === '') {
      setError("Заполните поле");
      return false;
    }
    return true;
  }

  const navigate = useNavigate();

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
      navigate('/');
      return;
    }  
  } catch (message) {
    console.log(message.response.data.message);
    setError(message.response.data.message);
    console.log(message);
  }

    
  };



  return (
    <div>
      <h1>Вход</h1>
      <form className='auth' onSubmit={onHadleSubmit}>
        <label htmlFor='email'>
          <input
            type='email'
            placeholder='kat@mail.ru'
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
        <button>Войти</button>
      </form>
    </div>
  );
}

export default Authorization;