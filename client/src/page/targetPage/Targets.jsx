import React, { useState, useEffect } from 'react';
import requestAxios from '../../services/axios';
import CatDelete from '../CatPage/CatDelete';


function Targets({user}) {

  const [cats, setCats] = useState([]);

  const axiosCats = async () => {
    const { data } = await requestAxios.get(`/cats/hunter/${user?.id}`);
    if (data.message === 'success') {
        setCats(data.cats);
        console.log(data.cats);
    }
  };

  const handleDelete = async (id) => {
    try {
        const { data } = await requestAxios.delete(`/cats/${id}`)
        console.log(data);
      if (data.message === 'success') {
        setCats(cats.filter(cat => cat.id !== id));
      }
    } catch (error) {
      console.error('Error deleting product:', error);
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

           
            <CatDelete setCats={setCats} cat={cat} user={user} onDelete={handleDelete}/>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Targets;