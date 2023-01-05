import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';

const NavBar = () => {
  // return (
  //   <div>
  //     <header className="Navbar">
  //       <div className="ToolBar">
  //         <div className="ShoppingCartIcon">
  //           <ShoppingCartIcon
  //             sx={{ fontSize: "40px", color: "black", mx: 225, pt: 3 }}
  //           ></ShoppingCartIcon>
  //         </div>
  //       </div>
  //     </header>
  //   </div>
  // );
  return <div>
    <header className="Navbar">
      <TextField sx={{mx: 3}}className='inputlabal'></TextField>
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