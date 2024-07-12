import React, { useState } from'react';
import requestAxios from '../../services/axios';
import { useParams } from 'react-router-dom';
import "./CatUpdate.css"

function UpdateCat({ cat, setCats }) {
    const [catId, setCatId] = useState(1)
    const [isUpdate, setIsUpdate] = useState(false)

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
          <button type='submit'>Поймать котика!</button>
          </form>
      </div>
  );
}

export default UpdateCat;