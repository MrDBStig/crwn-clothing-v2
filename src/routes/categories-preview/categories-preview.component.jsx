import { useProductContext } from "../../contexts/product.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { products } = useProductContext();

  return (
    <>
      {Object.keys(products).map((title) => (
        <CategoryPreview key={title} title={title} products={products[title]} />
      ))}
    </>
  );
};

export default CategoriesPreview;
