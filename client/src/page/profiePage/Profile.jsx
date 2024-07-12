import React from 'react';
import { Link } from 'react-router-dom';

function Profile({ user }) {

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
    </div>
  );
}

export default Profile;