import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewWrapper,
  CategoryTitleLink,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewWrapper>
      <h2>
        <CategoryTitleLink to={title}>{title.toUpperCase()}</CategoryTitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </Preview>
    </CategoryPreviewWrapper>
  );
};

export default CategoryPreview;
