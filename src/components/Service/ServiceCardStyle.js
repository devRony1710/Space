import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 2px;
  border: none;
  background: #fff;
  height: 310px;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 900px)
 {
  height: 400px;
 }

@media screen and (max-width: 700px)
 {
   margin: 0 auto;
  height: 250px;
  width: 80%;
 }
 `;

export const CardImg = styled.img`
  background: powderblue;
  border-radius: 50%;
  padding: 15px;
`;

export const CardTitle = styled.h4`
  font-size: auto;
  color: #08045f;
`;

export const CardContent = styled.p`
  color: #6f6f6f;
`;
