import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  max-width: 600px;
  justify-content: space-between;
  margin: 30px;
  gap: 30px;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;
