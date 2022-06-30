import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useProductContext } from "../../contexts/product.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { products } = useProductContext();

  const [categoryProducts, setCategoryProducts] = useState(products[category]);

  useEffect(() => {
    setCategoryProducts(products[category]);
  }, [category, products]);

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </>
  );
};

export default Category;
