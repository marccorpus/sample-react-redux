import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { doClearCart } from "../redux/actions";

import CartItem from "./CartItem";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.totalAmount);

  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>

      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${totalAmount.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(doClearCart())}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
