import React from 'react';
import { ServiceCard } from './ServiceCard';
import {
  ServiceContainer,
  ServiceSection,
  ServiceTitle,
} from './ServicesStyle';

export const Service = () => {

  const water = ' https://res.cloudinary.com/ronyaab/image/upload/v1621060924/Space/signo-de-ne%C3%B3n-gota-agua-ilustraci%C3%B3n-vectorial-la-promoci%C3%B3n-naturaleza-166209240_zamtos.jpg';
  const fire = 'https://res.cloudinary.com/ronyaab/image/upload/v1621060979/Space/xzcv_uuykmh.jpg';
  const hearth = 'https://res.cloudinary.com/ronyaab/image/upload/v1621061189/Space/sadfgh_aataxi.jpg';
  const Air = 'https://res.cloudinary.com/ronyaab/image/upload/v1621060924/Space/Sin_t%C3%ADtulo_xzljpu.jpg';

  return (
    <ServiceSection>
      <ServiceTitle>Servicios</ServiceTitle>
      <ServiceContainer>
        <ServiceCard
          Icon={water}
          title={'Desarrollo de Software'}
          content={
            'Creamos software a la medida del cliente, para darle un impulso a tu marca en la nueva era digital'
          }
        />
        <ServiceCard
          Icon={fire}
          title={'Diseño'}
          content={
            'La identidad de tu empresa es importante por esto nos enfocamos en crear las mejores piezas visuales para la marca de tu negocio'
          }
        />
        <ServiceCard
          Icon={hearth}
          title={'Manejo de Redes'}
          content={
            'Estar presente en redes sociales es un plus, pero si tienes armonia en tu contenido y aplicas las mejores practicas en el manejo de redes, seguramente te va a diferenciar del resto'
          }
        />
        <ServiceCard
          Icon={Air}
          title={'Fotografia'}
          content={
            'Por que no mostrar mas alla que un logo? Nuestro servicio de fotografia te brindara las mejores imagenes para mostrar en cualquier sitio'
          }
        />
      </ServiceContainer>
    </ServiceSection>
  );
};
