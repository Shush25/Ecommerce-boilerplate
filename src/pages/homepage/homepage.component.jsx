import React, { useContext, useState } from "react";
import { MdAddShoppingCart, MdFavorite } from "react-icons/md";
import axios from "axios";

import "./homepage.styles.scss";

import { ProductsContext } from "../../services/fetchproducts.context";
import { CartContext } from "../../services/cart.context";
import { UsersContext } from "../../services/user.context";

const HomePage = () => {
  const { products } = useContext(ProductsContext);
  const { item, setItem } = useContext(CartContext);
  const { currentUser } = useContext(UsersContext);
  const [fav, setFav] = useState([]);
  const [error, setError] = useState(null);

  const PostFavourite = () => {
    axios
      .post("http://localhost:5000/favourites", {
        favouriteList: fav,
        userId: currentUser.id,
      })
      .then((res) => {
        setError("Favourite Registered Successfully");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };

  return (
    <div className="homepage">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-1-of-5 col-1-of-5--margin">
              <div className="card-box">
                <div className="card-box__image-box">
                  <img
                    className="card-box__image-box__image"
                    src={product.image}
                    alt="img"
                  />
                </div>
                <div className="card-box__text">
                  <div>{product.title}</div>
                  <div>Rs.{product.amount}</div>
                  <div className="card-box__text--green-bg">
                    <span>{product.rating}</span>
                  </div>
                </div>
                <div className="icon">
                  {fav.find((obj) => {
                    return obj === product.id;
                  }) ? (
                    <div
                      className="fav-icon fav-icon--select"
                      onClick={() => {
                        setFav((fav) => [...new Set([...fav, product.id])]);
                        PostFavourite();
                      }}
                    >
                      <h2>
                        <MdFavorite />
                      </h2>
                    </div>
                  ) : (
                    <div
                      className="fav-icon"
                      onClick={() => {
                        setFav((fav) => [...new Set([...fav, product.id])]);
                        PostFavourite();
                      }}
                    >
                      <h2>
                        <MdFavorite />
                      </h2>
                    </div>
                  )}
                  <div
                    className="cart-icon"
                    onClick={() => {
                      setItem((it) => [...new Set([...it, product.id])]);
                      console.log(item);
                    }}
                  >
                    <h2>
                      <MdAddShoppingCart />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
