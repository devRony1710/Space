import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 20px;
  border: none;
  background: #000;
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
  height: 200px;
  border-radius: 50%;
  padding: 15px;
`;

export const CardTitle = styled.h4`
  text-align: center;
  position: relative;
  top: 30px;
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-transform: uppercase;
  color: #FFF;
`;

export const CardContent = styled.p`
  color: #6f6f6f;
`;
