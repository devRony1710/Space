import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px;
  background: #222831;
  line-height: 35px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const ImgAbout = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const TitleAbout = styled.h3`
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  text-align: center;
  color: #CD0029;
`;

export const AboutDescription = styled.p`
  text-align: justify;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, sans-serif;
  font-size: 20px;
  font-style: italic;
  color: #fff;
  padding: 30px;
  margin-left: 25px;
`;
