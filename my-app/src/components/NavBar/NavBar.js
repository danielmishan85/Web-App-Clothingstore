import React from "react";
import "./NavBar.css";
import HeaderPhoto from "../../photos/headerphoto.png";
const NavBar = () => {
  return (
    <div>
      <header className="Navbar">
        <div className="ToolBar">
          <div className="Logo">
            <img src={HeaderPhoto} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
