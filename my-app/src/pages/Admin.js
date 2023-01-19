import React, { useState, useEffect } from 'react';

import AdminDetails from '../components/Admin/AdminDetails';
import UsersList from '../components/Admin/UsersList';

const Admin = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('http://localhost:5000/api/users')
      .then((res) => (res.ok ? res.json() : { users: '' }))
      .then((data) => {
        setUsers(data.users);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Admin Screen</h1>
      <AdminDetails></AdminDetails>
      <UsersList users={users}></UsersList>
    </div>
  );
};

export default Admin;
