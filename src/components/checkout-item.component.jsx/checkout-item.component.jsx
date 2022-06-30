import { useCartContext } from "../../contexts/cart.context";

import {
  CheckoutItemWrapper,
  ImageWrapper,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = (item) => {
  const { name, price, imageUrl, quantity } = item;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useCartContext();

  const addItem = () => addItemToCart(item);
  const removeItem = () => removeItemFromCart(item);
  const clearItem = () => clearItemFromCart(item);

  return (
    <CheckoutItemWrapper>
      <ImageWrapper>
        <img src={imageUrl} alt={name} />
      </ImageWrapper>
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
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemWrapper>
  );
};

export default CheckoutItem;
