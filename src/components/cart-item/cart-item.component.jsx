import { CartItemWrapper, ItemDetails } from "./cart-item.styles";

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <CartItemWrapper>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemWrapper>
  );
};

export default CartItem;
