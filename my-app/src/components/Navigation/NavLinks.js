import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

import { AuthContext } from '../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);
  console.log(auth.isLoggedIn)

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/'>
          <HomeIcon sx={{ fontSize: '50px' }} />
        </NavLink>
      </li>
      
        <li>
          <NavLink to='/profile'>
            <AccountCircleIcon sx={{ fontSize: '50px' }} />
          </NavLink>
        </li>
      
    
        <li>
          <NavLink to='/login'>
            <LoginIcon sx={{ fontSize: '50px' }} />
          </NavLink>
        </li>
      
      <li>
        <NavLink to='/cart'>
          <ShoppingCartIcon sx={{ fontSize: '50px' }} />
        </NavLink>
      </li>
 
        <li>
          <button
            style={{
              border: 'none',
            }}
            onClick={auth.logout}
          >
            <LogoutIcon sx={{ fontSize: '50px' }} />
          </button>
        </li>
      
    </ul>
  );
};

export default NavLinks;
