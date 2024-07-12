import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestAxios from '../../services/axios';
import './Profile.css';

function Profile({ user }) {
  const [cats, setCats] = useState([]);
  const [sausage, setSausage] = useState(100); // Начальное значение 100

  useEffect(() => {
    // Загрузка данных о котах
    const fetchCats = async () => {
      try {
        const { data } = await requestAxios.get(`/cats/user/${user.id}`);
        if (data.message === 'success') {
          setCats(data.cats);
        }
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();

    // Загрузка количества сосисок из localStorage
    const savedSausage = localStorage.getItem('sausage');
    if (savedSausage) {
      setSausage(parseInt(savedSausage));
    }
  }, [user]);

  const role = user.role ? 'Охотник' : 'Волшебник';

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
            <td>{sausage}</td>
          </tr>
        </tbody>
      </table>
      {role === 'Волшебник' && <Link to="/cats">Котики</Link>}
      {role === 'Охотник' && <Link to="/targets">Котики на заказ</Link>}
      <div>

        <h1>Мои котики</h1>
        <div>
          {cats.map(cat => (
            <div key={cat.id}>
              <img src={cat.img} alt={cat.name} />
              <h2>{cat.name}</h2>
              <p>Класс: {cat.catClass}</p>
              <p>Ареал обитания: {cat.place}</p>
              <p>Можно поймать за: {cat.price} сосиски</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Profile;
