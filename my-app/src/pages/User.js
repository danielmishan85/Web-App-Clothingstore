import React from 'react';

import UserDetails from '../components/User/UserDetails';

const User = () => {
  // fetch('https://dummyjson.com/users')
  //   .then((res) => res.json())
  //   .then((json) =>
  //   json.users.forEach(element => {
  //     const userData = {
  //       firstName: element.firstName,
  //       lastName: element.lastName,
  //       email: element.email,
  //       password: element.password,
  //     }
  //     console.log(userData)
  //   }));

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>My Profile</h1>
      <UserDetails></UserDetails>
    </div>
  );
};

export default User;
