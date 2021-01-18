import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceContainer } from './ServicesStyle';

import Code from '../../assets/static/code.png';
import Design from '../../assets/static/design.png';
import Social from '../../assets/static/social.png';
import Camera from '../../assets/static/camera.png';

export const Service = () => {
  return (
    <ServiceContainer>
      <ServiceCard
        Icon={Code}
        title={'Desarrollo de Software'}
        content={
          'Creamos software a la medida del cliente, en base a plantillas 100% personalizadas'
        }
      />
      <ServiceCard
        Icon={Design}
        title={'Diseno'}
        content={
          'La identidad de tu empresa es importante por esto nos enfocamos en crear las mejores piezas visuales para la marca de tu negocio'
        }
      />
      <ServiceCard
        Icon={Social}
        title={'Manejo de Redes'}
        content={
          'Estar presente en redes sociales es un plus, pero si tienes armonia en tu contenido y aplicas las mejores practicas en el manejo de redes, seguramente te va a diferenciar del resto'
        }
      />
      <ServiceCard
        Icon={Camera}
        title={'Fotografia'}
        content={
          'Por que no mostrar mas alla que un logo? Nuestro servicio de fotografia te brindara las mejores imagenes para mostrar en cualquier sitio'
        }
      />
    </ServiceContainer>
  );
};
