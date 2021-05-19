import styled from 'styled-components';

export const TradeMarkMainContainer = styled.div`
    display: flex;
    align-items: center;
    height: 200px;
    background-color: #222831;
`

export const TradeMarkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
    height: 100px;
`

export const TradeMarkImg = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
`