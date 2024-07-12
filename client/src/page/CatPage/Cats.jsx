import React, { useState, useEffect } from 'react';
import requestAxios from '../../services/axios';
import UpdateCat from './CatUpdate';
import './Cats.css';

function Cats({ user }) {
  const [cats, setCats] = useState([]);

  const axiosCats = async () => {
    try {
      const { data } = await requestAxios.get(`/cats`);
      if (data.message === 'success') {
        setCats(data.cats);
      }
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  };

  useEffect(() => {
    axiosCats();
  }, [user]);

  return (
    <div>
      <h1>Котики</h1>
      <div className='cats-container'>
        {cats.map(cat => (
          <div key={cat.id} className='cat-card'>
            <img src={cat.img} alt={cat.name} />
            <div>
              <h2>{cat.name}</h2>
              <p>Класс: {cat.catClass}</p>
              <p>Ареол обитания: {cat.place}</p>
              <p>Можно поймать за: {cat.price} сосиски</p>
            </div>
            <UpdateCat setCats={setCats} cat={cat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;
