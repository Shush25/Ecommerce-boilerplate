import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";

import "./cart.styles.scss";

import { CartContext } from "../../services/cart.context";
import { UsersContext } from "../../services/user.context";
import CustomButton from "../../components/custom-button/custom-button.component";

const CartPage = () => {
  const { item, setItem } = useContext(CartContext);
  const { currentUser } = useContext(UsersContext);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState(0);
  const [error, setError] = useState(null);

  /* Get the items by there id which we got through the homepage via contexts and fetch all the details of these items also adding a new field qty to store the quantity. */

  const getItemById = (id) => {
    fetch("https://shush-assignment-1.herokuapp.com/products/" + id)
      .then((res) => res.json())
      .then((result) => {
        setCost((prevState) => prevState + Number(result.amount));
        setProducts((it) => [
          ...new Set([...it, (result = { ...result, qty: 1 })]),
        ]);
      });
  };
  const effectRan = useRef(false);
  /* With effectRan we make sure that the items gets added only once to the cart as useEffects runs twice due to strict mode */
  useEffect(() => {
    if (effectRan.current === false) {
      setProducts([]);
      item.map((it) => {
        return getItemById(it);
      });
    }
    return () => {
      effectRan.current = true;
    };
  }, [item]);

  /* By clicking on placing order post api request is made and if successful it is promted that the order was successful */

  const PlaceOrder = () => {
    axios
      .post("https://shush-assignment-1.herokuapp.com/orders", {
        productId: item,
        userId: currentUser.id,
        "total-amount": cost,
      })
      .then((res) => {
        setError("Order Successfully!!! Will be Delivered in 5 Days");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };

  /* The two functions handles the incrementation and decrementation of the quantity of products if it hits 0 the item is removed both from the item array and the product arrray */
  const handleDecrement = (p) => {
    setCost((prevState) => prevState - Number(p.amount));
    let pd = products.find((pr) => pr.id === p.id);
    pd.qty -= 1;
    const updateProducts = products.map((p) => {
      if (pd.id === p.id) return pd;
      return p;
    });
    setProducts(updateProducts);
    if (pd.qty === 0) {
      removeItem(pd.id);
      removeObj(pd);
    }
  };
  /* For removing items and product should have made a single reusable function but time constraint*/
  const removeObj = (p) => {
    let pd = products.find((pr) => pr.id === p.id);
    const updateProducts = products.filter((p) => {
      return p.id !== pd.id;
    });
    setProducts(updateProducts);
  };

  const removeItem = (id) => {
    const updateItems = item.filter((p) => {
      return p !== id;
    });
    setItem(updateItems);
  };

  const handleIncrement = (p) => {
    setCost((prevState) => prevState + Number(p.amount));
    let pd = products.find((pr) => pr.id === p.id);
    pd.qty += 1;
    const updateProducts = products.map((p) => {
      if (pd.id === p.id) return pd;
      return p;
    });
    setProducts(updateProducts);
  };

  return (
    <div className="homepage">
      <div className="row">
        <div className="col-2-of-3">
          <div className="card-box card-box--no-hover">
            <div className="cart-text">My Cart</div>
            {products ? (
              products.map((product) => {
                return (
                  <div className="card-box card-box--no-hover">
                    <div className="row">
                      <div className="col-1-of-3">
                        <div className="cart-image-box">
                          <img
                            className="cart-image"
                            src={product.image}
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-2-of-3">
                        <div className="cart-box-text">{product.title}</div>
                        <div className="cart-box-text">
                          Rs. {product.amount}
                        </div>
                        <div className="row cart-qty">
                          <div className="col-1-of-3">
                            <button
                              className="qty-button"
                              onClick={() => handleDecrement(product)}
                            >
                              -
                            </button>
                          </div>
                          <div className="col-1-of-3">
                            <div className="qty-box">
                              <div className="qty-box__text">{product.qty}</div>
                            </div>
                          </div>
                          <div className="col-1-of-3">
                            <button
                              className="qty-button"
                              onClick={() => handleIncrement(product)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
          <div className="button-container">
            <div className="order-button">
              {/* Once the order is placed the arrays are flushed empty */}
              <CustomButton
                label={"PLACE ORDER"}
                onClick={() => {
                  PlaceOrder();
                  setItem([]);
                  setProducts([]);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          {cost ? (
            <div className="card-box">
              <div className="cart-text cart-text--price">Price Details</div>
              <div className="price-text">
                <span>Price:</span> <span>{cost}</span>
              </div>
              <div className="price-text">
                <span>Discount Price:</span> <span>100</span>
              </div>
              <div className="price-text">
                <span>Delivery Cost:</span> <span>50</span>
              </div>
              <hr />
              <div className="price-text">
                <span>Total</span> <span>{cost - 50}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {error ? <div className="price-text">{error}</div> : <></>}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
