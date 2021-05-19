import React from 'react';
import {
  CardContainer,
  CardImg,
  CardTitle,
} from './ServiceCardStyle';

export const ServiceCard = ({ Icon, title, content }) => {
  return (
    <CardContainer>
      <CardImg alt="service logo" src={Icon} />
      <CardTitle>{title}</CardTitle>
      {/* <CardContent>{content}</CardContent> */}
    </CardContainer>
  );
};
