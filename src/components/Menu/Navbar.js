import React from 'react';

import { NavbarWrapper } from './NavbarWrapper';

export const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <a href="/">Inicio</a>
      <a href="/">Sobre Nosotros</a>
      <a href="/">Servicios</a>
      <a href="/">Portafolio</a>
      <a href="/">Equipo</a>
      <a href="/">Contacto</a>
    </NavbarWrapper>
  );
};
