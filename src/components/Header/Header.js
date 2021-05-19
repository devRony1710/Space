import React, { useState } from 'react';

//Componets
import { Navbar } from '../Menu/Navbar';
import { MenuButton } from '../Menu/MenuButton';
// import { Svg } from './Svg';

//styles
import { HeaderWrapper, LogoImg } from './HeaderStyle';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const Logo = 'https://res.cloudinary.com/ronyaab/image/upload/v1621057669/Space/Sin_t%C3%ADtulo-2_wixnaw.png'

  return (
    <HeaderWrapper>
      {/* <Svg></Svg> */}
      <LogoImg src={Logo}/>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
};
