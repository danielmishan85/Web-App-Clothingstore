import React from 'react';

import AdminDetails from '../components/Admin/AdminDetails'
import UsersList from '../components/Admin/UsersList'

const Admin = (props) => {
    const users = props.users;
  
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>Admin Screen</h1>
        <AdminDetails ></AdminDetails>
        <UsersList users={users}></UsersList>
      </div>
    );
  };

  export default Admin;