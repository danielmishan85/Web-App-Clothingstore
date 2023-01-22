import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import './NavLinks.css';
import { getBasketItemAmount } from "../../context/reducer";
import { useStateValue } from "../../context/stateProvider";

const NavLinks = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [userAuth, setUsetAuth] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsetAuth(user);
      } else {
        setUsetAuth(null);
      }
    });

    return () => {
      listen();
    };
  });

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out succesful!');
      })
      .catch((error) => console.log(error));
    history('/');
  };

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/'>
          <HomeIcon sx={{ fontSize: '50px' }} />
        </NavLink>
      </li>
      {userAuth && (
        <li>
          <NavLink to={`/users/Admin`}>
            <AccountCircleIcon sx={{ fontSize: '50px' }} />
          </NavLink>
        </li>
      )}
      {!userAuth && (
        <li>
          <NavLink to='/login'>
            <AccountCircleIcon sx={{ fontSize: '50px' }} />
          </NavLink>
        </li>
      )}
       <li>
        <Link to="/checkout">
            <span className="shoppingcarticon__icon">
              <ShoppingCartIcon sx={{ fontSize: "50px" }} />
            </span>
            <span> Your Cart </span>
            <span className="shopping__amount">
              {getBasketItemAmount(basket)}
            </span>
        </Link>
      </li>
      {userAuth && (
        <li>
          <button
            style={{
              border: 'none',
            }}
            onClick={signoutHandler}
          >
            <LogoutIcon sx={{ fontSize: '50px' }} />
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
