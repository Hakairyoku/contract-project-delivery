import { useState } from 'react';
import requestAxios from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '../../services/axios';

function Registration({setUser}) {
  
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [role, setRole] = useState(false)
  const [sausage, setSausage] = useState(100)
  const navigate = useNavigate();
  console.log(role);

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

    if (!validation(name, email, password, cpassword, role)) {
      return;
    }

    if(role) {setSausage(10)}

    try {

      const { data } = await requestAxios.post('/auth/registration', {
        name,
        email,
        password,
        role,
        sausage,
      });
      console.log(111, data);

        if (data.message === 'success') {
console.log(222);
navigate('/profile');
          setAccessToken(data.accessToken);
setUser(data.user);

          return;
        }
      
    } catch (message) {
      
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
        <label htmlFor='role'>
        <select name="select" onChange={(e) => setRole(e.target.value)}>
        <option value={false} selected>Волшебник</option>
        <option value={true}>Охотник</option>

        </select>
        </label>
        <span>{error && <p>{error}</p>}</span>
        <button type='submit'>
          Пошли ловить котика?
        </button>
      </form>
    </div>
  );
}


export default Registration;