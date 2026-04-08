import React from 'react'
import { S } from './Statistic_Styles'

type StatisticTypeProps = {
  statistic: string
  statisticTitle: string
}

export const Statistic:React.FC<StatisticTypeProps> = ({ statistic, statisticTitle }) => {
  return (
    <S.Statistic>
      <h2>{statisticTitle}</h2>
      <span>{statistic}</span>
    </S.Statistic>
  )
}
