import { INCREASE, DECREASE, REMOVE, CLEAR_CART } from "./actions";

import cart from "../cart";

const initialState = {
  cart,
  itemCount: 3,
  totalAmount: 1799.97,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE: {
      const cart = state.cart.map((c) => {
        if (c.id === action.payload.id) {
          c.amount += 1;
        }

        return c;
      });

      const itemCount = state.itemCount + 1;
      const totalAmount = state.totalAmount + action.payload.amount;

      return { cart, itemCount, totalAmount };
    }

    case DECREASE: {
      const cart = state.cart.map((c) => {
        if (c.id === action.payload.id) {
          c.amount -= 1;
        }

        return c;
      });

      const itemCount = state.itemCount - 1;
      const totalAmount = state.totalAmount - action.payload.amount;

      return { cart, itemCount, totalAmount };
    }

    case REMOVE: {
      const cart = state.cart.filter((c) => c.id !== action.payload.id);

      const tempCart = [...state.cart];
      const item = tempCart.find((c) => c.id === action.payload.id);
      const itemCount = state.itemCount - item.amount;
      const totalAmount = state.totalAmount - item.price * item.amount;

      return { cart, itemCount, totalAmount };
    }

    case CLEAR_CART: {
      const cart = [];

      return { cart, itemCount: 0, totalAmount: 0 };
    }

    default:
      return state;
  }
};

export default reducer;
