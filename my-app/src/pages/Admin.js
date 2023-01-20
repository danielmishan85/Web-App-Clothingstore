import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

import AdminDetails from '../components/Admin/AdminDetails';
import UsersList from '../components/Admin/UsersList';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [userList, setUserList] = useState([]);

  const socket = io('http://localhost:5000');

  const getUsers = () => {
    fetch('http://localhost:5000/api/users')
      .then((res) => (res.ok ? res.json() : { users: '' }))
      .then((data) => {
        setUsers(data.users);
      });
  };
  useEffect(() => {
    getUsers();
  }, [users]);
  console.log(users);

  if (userList === undefined) setUserList([]);
  useEffect(() => {
    async function getUsers() {
      if (!userList[0]) {
        try {
          // eslint-disable-next-line
          socket.emit("GET_USERS");
          // eslint-disable-next-line
          socket.on("getUsers_error", (msg) => {
            alert("Getting User Failed on server.")
          });
          // eslint-disable-next-line
          socket.on("getUsers_success", (data) => {
            setUserList([...data]);
          })
        } catch (e) {
          console.log(e);
        }
      }
    }
    getUsers();
  }, []);
  console.log(userList)

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
