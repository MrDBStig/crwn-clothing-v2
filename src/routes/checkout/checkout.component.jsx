import { useCartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item.component.jsx/checkout-item.component";

import {
  CheckoutHeader,
  CheckoutWrapper,
  CheckoutHeaderBlock,
  CheckoutTotal,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, total } = useCartContext();

  return (
    <CheckoutWrapper>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} {...item} />;
      })}
      <CheckoutTotal>Total : ${total}</CheckoutTotal>
    </CheckoutWrapper>
  );
};

export default Checkout;
