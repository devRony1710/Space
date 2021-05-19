import React from 'react';
import { TeamCard } from './TeamCard/TeamCard';
import { TeamsContainer } from './TeamStyle';

const Jose = 'https://res.cloudinary.com/ronyaab/image/upload/v1619747226/Space/Screenshot_2021-04-29_201852_uywqhc.png'
const Rony = 'https://res.cloudinary.com/ronyaab/image/upload/v1619747226/Space/Screenshot_2021-04-29_201930_yybibr.png'
const Yube = 'https://res.cloudinary.com/ronyaab/image/upload/v1619747226/Space/Screenshot_2021-04-29_204505_tujk3r.png'

export const Team = () => { 
    return (
        <TeamsContainer>

            <TeamCard Photo={Jose} Name='Jose Osorio' Status='CEO' Social='@escritorconluz' />
            <TeamCard Photo={Rony} Name='Rony Antolinez' Status='Co-Founder / FullStack Developer' Social='@dev.rony.js' />
            <TeamCard Photo={Yube} Name='Yubelka Muñoz' Status='Web Developer' Social='@yubelkamunoz

' />
        </TeamsContainer>

    )
}