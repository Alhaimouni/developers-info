import React from 'react';
import { removeAction } from './Developer';

function DeveloperList({ users, dispatch }) {


  return (
    <div>
      <ul>
        {(users.length) ? users.map((user, index) => <li
          key={index}
          onClick={() => {
            dispatch(removeAction(user.id))
          }}>{user.name}</li>) : <p>No users</p>}
      </ul>
    </div>
  )
}

export default DeveloperList;
