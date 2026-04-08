import React from 'react'
import { Statistic } from './feedbackStatistic/Statistic'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Slider } from './feedbackSlider/Slider'
import { Container } from '../../../components/Container'
import { S } from './Feedback_Styles'


export const Feedback:React.FC = () => {
  return (
    <S.Feedback id="feedback">
      <Container>
        <FlexWrapper $mobileGap='70px' $gap='100px' $wrap='wrap'>
          <Slider />
          <FlexWrapper $direction="column" $gap='30px' style={{margin: "0 auto"}}>
            <Statistic statistic={'100 %'} statisticTitle={'Satisfaction Clients'} />
            <Statistic statistic={'+ 80'} statisticTitle={'Clients On Worldwide'} />
            <Statistic statistic={'743'} statisticTitle={'Projects Done'} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Feedback >
  )
}


