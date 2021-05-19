import styled from 'styled-components';

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 0 40px;
  background: #393e46;

  & :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const ServiceSection = styled.div`
  margin: 0;
  background: #393e46;
  height: 70vh;
`;

export const ServiceTitle = styled.h3`
  margin: 0;
  text-align: center;
  padding: 35px;
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  letter-spacing: 2px;
  color: #E26B00;
`;
