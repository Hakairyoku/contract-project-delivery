import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestAxios from '../../services/axios';

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
      <h1>Profile</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Role:</td>
            <td>{role}</td>
          </tr>
          <tr>
            <td>Sausage:</td>
            <td>{user.sausage}</td>
          </tr>
        </tbody>
      </table>
      <div>
        {role === 'mage' && <Link to="/cats">Cats Page</Link>}
        {role === 'hunter' && <Link to="/targets">Targets Page</Link>}
      </div>
      <div>
      <div>
      <h1>My Cats</h1>
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