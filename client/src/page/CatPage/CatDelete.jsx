import React, { useState } from 'react';
import requestAxios from '../../services/axios';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


function CatDelete({cat, user, onDelete,}) {
    

    
  return (
      <div>
        <h1>Target</h1>

        {user && (
       <button onClick={onDelete(cat.id)}>
         Доставлено
       </button>
     )}

    </div>
  );
}

export default CatDelete;