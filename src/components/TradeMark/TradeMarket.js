import React from 'react';
import { TradeMarkContainer, TradeMarkImg, TradeMarkMainContainer } from './TradeMarketStyle';

export const TradeMark = () => {

    const pictures = {
        logo: "https://res.cloudinary.com/ronyaab/image/upload/v1621391232/Space/LOGO_DEF_PNG_tfknsy.png",
        logo2: "https://res.cloudinary.com/ronyaab/image/upload/v1621391236/Space/logo_png_uta2mj.png",
        logo3: "https://res.cloudinary.com/ronyaab/image/upload/v1621391241/Space/cropped-logo-m3builder-1_w7yo5m.png",
        logo4: "https://res.cloudinary.com/ronyaab/image/upload/v1621391236/Space/logo_png_uta2mj.png",
        logo5: "https://res.cloudinary.com/ronyaab/image/upload/v1621391236/Space/logo_png_uta2mj.png",
        
    }

    return (
        <TradeMarkMainContainer>    
            <TradeMarkContainer>
            <TradeMarkImg src={pictures.logo} />   
            <TradeMarkImg src={pictures.logo2} />   
            <TradeMarkImg src={pictures.logo3} />   
            <TradeMarkImg src={pictures.logo4} />   
            <TradeMarkImg src={pictures.logo5} />   
            </TradeMarkContainer>
        </TradeMarkMainContainer>
    )
}