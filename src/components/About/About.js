import React from 'react';

import AboutImg from '../../assets/static/About.png';

//styles
import {
  ImgAbout,
  AboutContainer,
  TitleAbout,
  AboutDescription,
} from './AboutStyle';

export const About = () => {
  return (
    <AboutContainer id="about">
      <div>
        <ImgAbout src={AboutImg} />
      </div>
      <div>
        <TitleAbout>Sobre Nosotros</TitleAbout>
        <AboutDescription>
          Space Bogota es una Agencia dedicada a la creacion de indentidades
          visuales, ofrecemos nuestros servicios desde el 2020. Buscamos siempre
          mantener una armonia entre toda tu marca personal y/o la de tu
          empresa. Nuestro enfoque es ubicarte en el top 10 entre diferentes
          industrias, brindando los recursos necesarios para cumplir este
          objetivo
        </AboutDescription>
      </div>
    </AboutContainer>
  );
};
