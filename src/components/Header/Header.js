import React, { useState } from 'react';

//Componets
import { Navbar } from '../Menu/Navbar';
import { MenuButton } from '../Menu/MenuButton';
import { Svg } from './Svg';

//styles
import { HeaderWrapper } from './HeaderStyle';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Svg></Svg>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
};
