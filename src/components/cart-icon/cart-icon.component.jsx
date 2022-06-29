import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

import { useCartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCartContext();

  const toggleDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleDropdown}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
