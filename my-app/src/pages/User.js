import React from 'react';

import UserDetails from '../components/User/UserDetails';

const User = (props) => {
  const users = props.users;

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>My Profile</h1>
      <UserDetails users={users}></UserDetails>
    </div>
  );
};

export default User;
