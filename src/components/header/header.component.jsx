import React, { useContext } from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { UsersContext } from "../../services/user.context";
import { CartContext } from "../../services/cart.context";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext);
  const { item } = useContext(CartContext);
  return (
    <div className="header">
      <Link className="header__logo-box" to="/">
        ShopKart.
      </Link>
      <Link className="header__product-text" to="/">
        Products
      </Link>
      {/* If current user are present then show logout button otherwise show login button */}
      {currentUser ? (
        <button
          onClick={() => {
            setCurrentUser(null);
          }}
        >
          <Link className="header__login-text" to="/login">
            Logout
          </Link>
        </button>
      ) : (
        <Link className="header__login-text" to="/login">
          Login
        </Link>
      )}
      <Link className="header__cart-box" to="/cart">
        <h2>
          <FaShoppingCart />
          {item.length !== 0 ? (
            <div className="item-len">{item.length}</div>
          ) : (
            <></>
          )}
        </h2>
      </Link>
    </div>
  );
};

export default Header;
