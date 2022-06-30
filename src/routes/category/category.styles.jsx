import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -moz-column-gap: 10px;
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;
