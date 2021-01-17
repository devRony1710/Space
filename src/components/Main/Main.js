import React from 'react';
import {
  MainContent,
  Paragraph,
  Section,
  SubTitle,
  TitleContent,
} from './MainStyle';

export const Main = () => {
  return (
    <>
      <Section>
        <MainContent>
          <TitleContent>Space Bogota</TitleContent>
          <SubTitle>
            Somos una agencia de publicidad, <br /> Arquitectura & Marketing
            Digital
          </SubTitle>
          <Paragraph>
            Creamos y cuidamos todos los detalles que definen la personalidad de
            tu marca
          </Paragraph>
        </MainContent>
      </Section>
    </>
  );
};
