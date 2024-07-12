import React, { useState, useEffect } from 'react';
import requestAxios from '../../services/axios';
import UpdateCat from './CatUpdate';

function Cats({user}) {

  const [cats, setCats] = useState([]);

  const axiosCats = async () => {
    const { data } = await requestAxios.get(`/cats`);
    if (data.message === 'success') {
        setCats(data.cats);
        console.log(data.cats);
    }
  };


  useEffect(() => {
    
      axiosCats()
   
  
  }, [user]);

  


  return (
    <div>
      <h1>Котики</h1>
      <div>
        {cats&& cats.map(cat => (
          <div key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <h2>{cat.name}</h2>

            <p>Класс: {cat.catClass}</p>
            <p>Ареол обитания: {cat.place}</p>
            <p>Можно поймать за: {cat.price} сосиски</p>

           
            <UpdateCat setCats={setCats} cat={cat}/>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;