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

export const Title = styled.h2`
  margin: 0 50px;
  color: #000;
  font-weight: bold;
`;
