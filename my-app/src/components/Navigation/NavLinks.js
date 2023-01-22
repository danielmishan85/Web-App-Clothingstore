import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { getBasketItemAmount } from "../../context/reducer";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const NavLinks = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [userAuth, setUsetAuth] = useState(null);
  const [userData, setUserData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useNavigate();
  const authentication = useContext(AuthContext);

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
  // if(userAuth){
  //   authentication.setEmail(`${userAuth.email}`)
  // }
  // console.log(`${authentication.email}`)
  // let email = null;
  // {
  //   userAuth ? (email = `${userAuth.email}`) : (email = null);
  // }
  // console.log(email)

  // const getUser = () => {
  //   fetch(`http://localhost:5000/api/users`)
  //     .then((res) => (res.ok ? res.json() : { users: '' }))
  //     .then((data) => {
  //       setUserData(data.users);
  //     });
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);
  // const currentUser = userData.find((u) => u.email === authentication.email);
  // console.log(currentUser);
  // if(currentUser){
  //   authentication.setRole(`${currentUser.role}`)
  // }
  // console.log(`${authentication.role}`)
  // let role = null;
  // {
  //   currentUser ? (role = `${currentUser.role}`) : (role = null);
  // }
  // console.log(role);
  // if (role === 'admin') {
  //   setIsAdmin(true);
  // }

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out succesful!");
      })
      .catch((error) => console.log(error));
    authentication.logout();
    history("/");
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">
          <HomeIcon sx={{ fontSize: "50px" }} />
        </NavLink>
      </li>
      {authentication.isLoggedIn && (
        <li>
          <NavLink to={`/users/Admin`}>
            <AccountCircleIcon sx={{ fontSize: "50px" }} />
          </NavLink>
        </li>
      )}
      {/* {authentication.isLoggedIn && isAdmin && (
        <li>
          <NavLink to={`/users/admin`}>
            <AccountCircleIcon sx={{ fontSize: '50px' }} />
          </NavLink>
        </li>
      )} */}
      {!authentication.isLoggedIn && (
        <li>
          <NavLink to="/login">
            <AccountCircleIcon sx={{ fontSize: "50px" }} />
          </NavLink>
        </li>
      )}
      <li>
        <Link to="/checkout">
          <Button className="toCart_btn">
            <span className="shoppingcarticon__icon">
              <ShoppingCartIcon sx={{ fontSize: "40px" }} />
            </span>
            <span>Your Cart </span>
            <span className="shopping__amount">
              {getBasketItemAmount(basket)}
            </span>
          </Button>
        </Link>
      </li>
      {authentication.isLoggedIn && (
        <li>
          <button
            style={{
              border: "none",
            }}
            onClick={signoutHandler}
          >
            <LogoutIcon sx={{ fontSize: "50px" }} />
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
