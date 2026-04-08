import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import { S } from './SocialsList_Styles'
import {Roll} from "react-awesome-reveal";


const socialsArr = [
    {
        iconId: 'dribble'
    },
    {
        iconId: 'upwork2'
    },
    {
        iconId: 'youtube'
    },
    {
        iconId: 'linkedin'
    },
    {
        iconId: 'github'
    },
]

export const SocialsList: React.FC = () => {
    return (
        <S.SocialsList>
            <ul>
                <Roll cascade damping={0.3} triggerOnce>
                    {socialsArr.map((s, index) => {
                        return (
                            <li key={index}>
                                <a href="">
                                    <Icon iconId={s.iconId} height='25' width='25' viewBox='0 0 25 25'></Icon>
                                </a>
                            </li>
                        )
                    })}
                </Roll>
            </ul>
        </S.SocialsList>
    )
}

