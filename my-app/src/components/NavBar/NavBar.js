import React from "react";
import "./NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <div>
      <header className="Navbar">
        <div className="ToolBar">
          <div className="ShoppingCartIcon">
            <ShoppingCartIcon
              sx={{ fontSize: "40px", color: "black", mx: 225, pt: 3 }}
            ></ShoppingCartIcon>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
