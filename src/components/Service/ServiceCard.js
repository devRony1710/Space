import React from 'react';
import { CardContainer, CardContent, CardTitle } from './ServiceCardStyle';

export const ServiceCard = ({ Icon, title, content }) => {
  return (
    <CardContainer>
      <img alt="service logo" src={Icon} />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};
