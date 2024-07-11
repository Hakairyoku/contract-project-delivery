import { useState } from 'react';
import requestAxios from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '../../services/axios';

function Registration({setUser}) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  function validation(name, email, password) {
    if (name.trim() === '' || email.trim() === '' || password.trim() === ''|| cpassword.trim() === '') {
      setError('Заполните поле');
      return false;
    }
    if (password.trim() !== cpassword.trim()) {
      setError('Пароли не совпадают');
      return false;
    }
    return true;
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (!validation(name, email, password, cpassword)) {
      return;
    }

    try {

      const { data } = await requestAxios.post('/auth/registration', {
        name,
        email,
        password,
      });
      console.log(data);
        if (data.message === 'success') {

          setAccessToken(data.accessToken);
setUser(data.user);
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
      <h1>Регистрация</h1>
      <form className='auth' onSubmit={onHandleSubmit}>
        <label htmlFor='name'>
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <input
            type='email'
            placeholder='example@mail.ru'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            minLength={5}
          />
        </label>
        <label htmlFor='password'>
          <input
            type='password'
            placeholder='password'
            value={password}
            required
            minLength={3}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          <input
            type='password'
            placeholder='check password'
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </label>
        <span>{error && <p>{error}</p>}</span>
        <button>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}


export default Registration;