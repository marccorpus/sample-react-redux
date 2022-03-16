export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";

export const doIncrease = (id, amount) => {
  return { type: INCREASE, payload: { id, amount } };
};

export const doDecrease = (id, amount) => {
  return { type: DECREASE, payload: { id, amount } };
};

export const doRemove = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const doClearCart = () => {
  return { type: CLEAR_CART };
};
