import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d2735;

  @media screen and (max-width: 700px) {
    position: fixed;
    width: 100%;
  }
`;
