import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useProductContext } from "../../contexts/product.context";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryTitle, CategoryWrapper } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { products } = useProductContext();

  const [categoryProducts, setCategoryProducts] = useState(products[category]);

  useEffect(() => {
    setCategoryProducts(products[category]);
  }, [category, products]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryWrapper>
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </CategoryWrapper>
    </>
  );
};

export default Category;
