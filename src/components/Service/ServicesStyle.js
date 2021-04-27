import styled from 'styled-components';

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 0 40px;
  background: #f3f8fa;

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
  background: #f3f8fa;
`;

export const ServiceTitle = styled.h3`
  margin: 0;
  text-align: center;
  padding: 35px;
  font-size: 40px;
  letter-spacing: 2px;
  color: #08045f;
`;
