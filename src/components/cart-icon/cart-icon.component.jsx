import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

import { useCartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useCartContext();

  const toggleDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleDropdown}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
