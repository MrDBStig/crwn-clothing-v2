import { AnyAction } from "redux";

import { setIsCartOpen, setCartItems, clearCart } from "./cart.action";

import { CartItem } from "./cart.types";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  if (clearCart.match(action)) {
    return {
      ...state,
      cartItems: CART_INITIAL_STATE.cartItems,
    };
  }
  return state;
};
