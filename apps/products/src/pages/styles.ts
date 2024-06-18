import styled from "styled-components";

export const Main = styled.main`
  padding: 2rem;
  margin-top: 10vh;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  -ms-grid-column-align: center;
`;