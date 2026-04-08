import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import { Container } from '../../../components/Container'
import { S } from './Skills_Styles'
import {JackInTheBox} from "react-awesome-reveal";

const iconArr = [
  {
    iconId: 'figma'
  },
  {
    iconId: 'html'
  },
  {
    iconId: 'css'
  },
  {
    iconId: 'sass'
  },
  {
    iconId: 'react'
  },
]

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <S.SkillsWrapper>
          <JackInTheBox cascade damping={0.3} triggerOnce>
            {iconArr.map((item, index) => {
              return (
                <Icon iconId={item.iconId} key={index} height="100" width="100" viewBox="0 0 100 100" />
              )
            })}
          </JackInTheBox>
        </S.SkillsWrapper>
      </Container>
    </S.Skills>
  )
}


