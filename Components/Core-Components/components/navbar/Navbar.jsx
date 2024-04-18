import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Avatar from "@mui/material/Avatar";
import cart_icon from "../../assets/cart_icon.png";
import Stack from "@mui/material/Stack";
import "./navbar.css";
import { Link } from "react-router-dom";
import MuiNavbarAdd from "../../external_Links/MUINABVAR/MuiNavbarAdd";
import MUINavDropdown from "../../external_Links/MUINABVAR/MUINavDrodown";
import { CartContext } from "../../Context/ItemContex";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cartItems } = CartContext();
  return (
    <nav className="primary-nav">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={"/static/images/avatar/1.jpg"} />
            </Stack>
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <Link to="/">
                <a href="#home">Home</a>
              </Link>
            </p>
            <p>
              <Link to="/products">
                <a href="#possibility">Products</a>
              </Link>
            </p>
            <p>
              <Link to="/requests">
                <a href="#wgpt3">Requests</a>
              </Link>
            </p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <MUINavDropdown />
          <MuiNavbarAdd className="middle" />
          <p className="myPz nav-login-cart">
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{cartItems.length}</div>
            {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
          </p>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <Link to="/products">
                    <a href="#possibility">Products</a>
                  </Link>
                </p>
                <p>
                  <Link to="/requests">
                    <a href="#wgpt3">Requests</a>
                  </Link>
                </p>
                <form class="myForm" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Find Our Product"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <Link to="/login">
                  <p>Sign in</p>
                </Link>
                <Link to="/forgot">
                  <button type="button">Sign up</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
