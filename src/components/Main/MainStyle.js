import styled from 'styled-components';

export const Section = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  top: 0;
  height: 90vh;
  width: 100%;
  background-image: url('https://res.cloudinary.com/ronyaab/image/upload/v1619510771/Cover_pa5v6n.jpg');
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  object-fit: cover;

  @media screen and (max-width: 700px) {
    background-image: url('https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80');
    background-size: cover;
  }
`;

export const MainContent = styled.div`  
  position: relative;
  top: -100px;
  color: #ffffff;
  padding: 20px;
  margin-left: 50px;
  text-align: center;
  @media screen and (max-width: 700px) {
    margin-top: -150px;
  }
`;

export const TitleContent = styled.h1`
  font-size: 70px;
`;

export const SubTitle = styled.h3`
  font-size: 30px;
`;

