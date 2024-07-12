import React, { useState } from'react';
import requestAxios from '../../services/axios';
import { useParams } from 'react-router-dom';

function UpdateCat({ cat, setCats, setIsUpdate }) {
    const [catId, setCatId] = useState(1)

    const handleUpd = async (event) => {
        event.preventDefault();
        const { data } = await requestAxios.put(`/cats/${cat.id}`, { name: cat.name , catClass: cat.catClass, img: cat.img, place: cat.place, price: cat.price });
        console.log(data.cat.id);
        if (data.message === 'success') {
            console.log(data);
            // setCats((prev) => prev.map((m)=> (m.id === data.cat.id ? data.cat : m)));
            setCats((prev) => prev.filter((cat) => cat.id !== data.cat.id))
            setIsUpdate((prev) => !prev);
        }
    }
  return (
      <div>
        <form onSubmit={handleUpd}>
          <button type='submit'>123</button>
          </form>
      </div>
  );
}

export default UpdateCat;