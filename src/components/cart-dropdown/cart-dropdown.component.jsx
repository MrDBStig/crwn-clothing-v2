import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useCartContext } from "../../contexts/cart.context";

import {
  CartDropdownWrapper,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useCartContext();

  const navigate = useNavigate();

  const goToCheckout = () => navigate("/checkout");

  return (
    <CartDropdownWrapper>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </CartDropdownWrapper>
  );
};

export default CartDropdown;
