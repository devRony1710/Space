import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #000;
  position: fixed;
  top: 10vh;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 70%;
  height: 90vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: #000;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: #fff;
    text-decoration: none;
  }
`;
