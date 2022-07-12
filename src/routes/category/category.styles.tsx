import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    margin: 1rem;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
