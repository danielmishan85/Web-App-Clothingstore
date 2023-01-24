import React from 'react';

import UserDetails from '../components/User/UserDetails';

const User = () => {
  // API of 100 fake users into mongoDb

  // fetch('https://dummyjson.com/users?limit=100&skip=0')
  //   .then((res) => res.json())
  //   .then((json) =>
  //     json.users.forEach((element) => {
  //       const userData = {
  //         firstName: element.firstName,
  //         lastName: element.lastName,
  //         email: element.email,
  //         password: element.password,
  //       };
  //       fetch('http://localhost:5000/api/users/signup', {
  //         method: 'POST',
  //         mode: 'cors',
  //         body: JSON.stringify(userData),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //         .then(() => {
  //           console.log(userData);
  //         })
  //         .catch((err) => console.error(err));
  //     })
  //   );

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
