import { useProductContext } from "../../contexts/product.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useProductContext();

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Shop;
