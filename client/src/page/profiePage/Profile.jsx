import React from 'react';
import { Link } from 'react-router-dom';

function Profile({ user }) {

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
    </div>
  );
}

export default Profile;