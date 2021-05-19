import React from 'react'; 
import { CardSocialMedia, CardStatus, ImgCard, TeamCardContainer, TeamName } from './TeamCardStyle';


export const TeamCard = ({Photo, Name, Status, Social}) => { 
    return (
        <TeamCardContainer>
            <ImgCard alt="Profile" src={Photo}/> 
            <TeamName>{Name}</TeamName>
            <CardStatus>{Status}</CardStatus>
            <CardSocialMedia href="/" />{Social}
        </TeamCardContainer>
    )
}