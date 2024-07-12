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
      <h1>Cats</h1>
      <div>
        {cats&& cats.map(cat => (
          <div key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <h2>{cat.name}</h2>
            <p>Class: {cat.catClass}</p>
            <p>Place: {cat.place}</p>
            <p>Sausage: {cat.price}</p>
            <UpdateCat setCats={setCats} cat={cat}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;
