import React from 'react';
import {
  MainContent,
  Section,
  SubTitle,
  TitleContent,
} from './MainStyle';

export const Main = () => {
  return (
    <>
      <Section>
        <MainContent>
          <TitleContent>Haz realidad tus ideas</TitleContent>
          <SubTitle>
            Somos una agencia de Diseño, <br /> Desarrollo & Marketing
            Digital
          </SubTitle>
        </MainContent>
      </Section>
    </>
  );
};
