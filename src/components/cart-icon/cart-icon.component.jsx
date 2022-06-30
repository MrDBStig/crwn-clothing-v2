import { useCartContext } from "../../contexts/cart.context";

import { CartIconWrapper, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCartContext();

  const toggleDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconWrapper onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconWrapper>
  );
};

export default CartIcon;
