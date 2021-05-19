import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;

  @media screen and (max-width: 700px) {
    position: fixed;
    width: 100%;
  }
`;

export const LogoImg = styled.img`
  height: 30px;
  object-fit: cover;
  margin-left: 40px;

`
