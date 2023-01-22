import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import AdminDetails from '../components/Admin/AdminDetails';
import UsersList from '../components/Admin/UsersList';

const Admin = () => {
  const [users, setUsers] = useState([]);

  const socket = io('http://localhost:5000');

  if (users === undefined) setUsers([]);
  useEffect(() => {
    async function getUsers() {
      if (!users[0]) {
        try {
          // eslint-disable-next-line
          socket.emit('GET_USERS');
          // eslint-disable-next-line
          socket.on('getUsers_error', (msg) => {
            alert('Getting User Failed on server.');
          });
          // eslint-disable-next-line
          socket.on('getUsers_success', (data) => {
            setUsers([...data]);
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
    getUsers();
  }, []);

  const deleteHanlder = (id) => {
    socket.emit("DELETE_USER", id)
    socket.on("deleteUser_error", (msg) => {
      alert("Delete Failed. Please try again.")
    });
    socket.on("deleteUser_success", (data) => {
      setUsers([...data]);
    });
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Admin Tutorial</h1>
      <AdminDetails></AdminDetails>
      <br />
      <br />
      <br /> 
      <UsersList users={users} onDelete={deleteHanlder}></UsersList>
    </div>
  );
};

export default Admin;
