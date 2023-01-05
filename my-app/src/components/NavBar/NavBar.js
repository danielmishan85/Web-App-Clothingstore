import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
      <nav>
        <ul>
          <li>
            <Link to='/signin'><PersonIcon sx={{ fontSize: "40px"}} className='personIcon'></PersonIcon></Link>
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