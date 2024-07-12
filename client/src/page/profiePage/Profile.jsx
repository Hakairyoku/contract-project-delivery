import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestAxios from '../../services/axios';
import './Profile.css';

function Profile({ user }) {

  const [cats, setCats] = useState([]);

  const axiosCats = async () => {
    const { data } = await requestAxios.get(`/cats/user/${user.id}`);
    if (data.message === 'success') {
        setCats(data.cats);
        console.log(data.cats);
    }
  };


  useEffect(() => {
    
      axiosCats()
   
  
  }, [user]);

  const role = user.role ? 'hunter' : 'mage';

  return (
    <div>
      <h1>Профиль</h1>
      <table>
        <tbody>
          <tr>
            <td>Имя:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Роль:</td>
            <td>{role}</td>
          </tr>
          <tr>
            <td>Сосиски:</td>
            <td>{user.sausage}</td>
          </tr>
        </tbody>
      </table>
      <div>
        {role === 'mage' && <Link to="/cats">Котики</Link>}
        {role === 'hunter' && <Link to="/targets">Котики на заказ</Link>}
      </div>
      <div>
      <div>
      <h1>Желанные котейки</h1>
      <div>
        {cats&& cats.map(cat => (
          <div key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <h2>{cat.name}</h2>
            <p>Class: {cat.catClass}</p>
            <p>Place: {cat.place}</p>
            <p>Sausage: {cat.price}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Profile;