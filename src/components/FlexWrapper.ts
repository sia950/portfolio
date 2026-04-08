import styled from 'styled-components'
import { theme } from '../styles/Theme'

type FlexWrapperPropsType = {
    $direction?: string
    $justify?: string
    $align?: string
    $wrap?: string
    $gap?: string
    $mobileGap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.$direction || "row"};
    justify-content: ${props => props.$justify || "flex-start"};
    align-items:  ${props => props.$align || "stretch"};
    flex-wrap:  ${props => props.$wrap || "nowrap"};
    gap: ${props => props.$gap};
    @media ${theme.media.mobile} {
    gap: ${props => props.$mobileGap};
  }
`