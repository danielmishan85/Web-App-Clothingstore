import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

const NavBar = () => {
  return <div>
    <header className="Navbar">
      <TextField sx={{mx: 3}} className='inputlabal' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}></TextField>
      <nav>
        <ul>
        <li>
            <Link to='/'><HomeIcon sx={{ fontSize: "40px"}} className='homeIcon'></HomeIcon></Link>
          </li>
          <li>
            <Link to='/signin'><PersonIcon sx={{ fontSize: "40px"}}  className='personIcon'></PersonIcon></Link>
          </li>
          <li>
            <Link to='/cart'><ShoppingCartIcon sx={{ fontSize: "40px"}} className='cartIcon'></ShoppingCartIcon></Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>;
};

export default NavBar;