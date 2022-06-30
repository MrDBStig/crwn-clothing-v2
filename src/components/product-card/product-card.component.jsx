import { ProductCardWrapper, Footer } from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useCartContext } from "../../contexts/cart.context";

const ProductCard = (product) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartContext();

  const addProduct = () => addItemToCart(product);

  return (
    <ProductCardWrapper>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>
        Add to cart
      </Button>
    </ProductCardWrapper>
  );
};

export default ProductCard;
