import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryTitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -moz-column-gap: 20px;
  column-gap: 20px;
`;
