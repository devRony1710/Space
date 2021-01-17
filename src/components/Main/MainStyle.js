import styled from 'styled-components';

export const Section = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  top: 0;
  height: 90vh;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;

  @media screen and (max-width: 700px) {
    background-image: url('https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80');
    background-size: cover;
  }
`;

export const MainContent = styled.div`
  color: #080248;
  padding: 20px;
  text-align: center;
  @media screen and (max-width: 700px) {
    margin-top: -250px;
  }
`;

export const TitleContent = styled.h1`
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  font-size: 40px;
  animation-name: slidein;
  animation-duration: 1.5s;
`;

export const SubTitle = styled.h3`
  @keyframes slideinright {
    from {
      margin-left: -100%;
      width: 0%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  font-size: 40px;
  animation: slideinright 1.5s;
  text-transform: capitalize;
  font-size: 25px;
`;

export const Paragraph = styled.p`
  @keyframes slideintop {
    from {
      margin-bottom: -100%;
      width: 0%;
    }

    to {
      margin-bottom: 0%;
      width: 100%;
    }
  }
  animation: slideintop 1.5s;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
`;
