import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { S } from './Specialty_Styles'

const blockArr = [
  {
    iconId: 'computer',
    text1: 'Front End',
    text2: 'Developer'
  },
  {
    iconId: 'paint',
    text1: 'UI/UX',
    text2: 'Designer'
  },
  {
    iconId: 'thunder',
    text1: 'Branding',
    text2: 'Designer'
  },
]

export const Specialty: React.FC = () => {
  return (
    <S.SpecialtySection id="about">
      <Container>
        <FlexWrapper $gap='95px'>
          <S.ExpirienceWrapper>
            <span>4+</span>
            <h2>
              Years<br />
              Experience<br />
              Working
            </h2>
          </S.ExpirienceWrapper>
          <S.SpecializedWrapper>
            <h2>Developer and Designer, specialized in UI/UX and Web Developer</h2>
            <S.BlockWrapper>
              {blockArr.map((b, index) => {
                return (
                  <S.SpecialtyBlock key={index}>
                    <Icon iconId={b.iconId} height='30' width='30' viewBox='0 0 30 30'></Icon>
                    <h3>{b.text1}<br />{b.text2}</h3>
                  </S.SpecialtyBlock>
                )
              })}
            </S.BlockWrapper>
          </S.SpecializedWrapper>
        </FlexWrapper>
      </Container>
    </S.SpecialtySection>
  )
}
