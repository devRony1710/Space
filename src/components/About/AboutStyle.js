import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px;
  background: #f4f4f4;
  line-height: 35px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const ImgAbout = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;

export const TitleAbout = styled.h3`
  font-size: 40px;
  text-align: center;
  color: #08045f;
`;

export const AboutDescription = styled.p`
  text-align: center;
  font-size: 20px;
  font-style: italic;
  color: #151051;
`;
