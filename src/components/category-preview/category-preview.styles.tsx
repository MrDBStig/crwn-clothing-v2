import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 860px) {
    margin: 1rem;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
