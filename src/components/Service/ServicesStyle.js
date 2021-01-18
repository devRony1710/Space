import styled from 'styled-components';

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 30px;
  background: #f3f8fa;

  & :hover {
    border: 2px solid powderblue;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
