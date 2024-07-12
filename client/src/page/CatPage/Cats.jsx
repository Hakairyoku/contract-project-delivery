import React, { useState, useEffect } from 'react';
import requestAxios from '../../services/axios';

function Cats() {
  const [cats, setCats] = useState([]);

  const axiosCats = async () => {
    const { data } = await requestAxios.get('/cats');
    if (data.message === 'success') {
        setCats(data.cats);
    }
  };


  useEffect(() => {
    axiosCats()
  }, []);


  return (
    <div>
      <h1>Cats</h1>
      <div>
        {cats.map(cat => (
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
  );
}

export default Cats;
