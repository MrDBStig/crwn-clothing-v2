import "./product-card.styles.scss";

import Button from "../button/button.component";

import { useCartContext } from "../../contexts/cart.context";

const ProductCard = (product) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartContext();

  const addProduct = () => addItemToCart(product);

  return (
    <div className="product-card-container ">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProduct}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
