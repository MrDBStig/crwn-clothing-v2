import { useCartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = (item) => {
  const { name, price, imageUrl, quantity } = item;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useCartContext();

  const addItem = () => addItemToCart(item);
  const removeItem = () => removeItemFromCart(item);
  const clearItem = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={removeItem} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItem} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
