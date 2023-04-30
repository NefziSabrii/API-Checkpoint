import axios from 'axios';
import { useState, useEffect } from 'react';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="user-list-container">
      <h1>List of Users</h1>
      <div className="card-container">
        {listOfUsers.map(user => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
