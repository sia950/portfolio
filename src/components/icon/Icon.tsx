import React from 'react'
import iconsSprite from '../../assets/images/iconsSprite.svg'
import styled from 'styled-components'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <StyledIcon width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </StyledIcon>
    )
}

const StyledIcon = styled.svg`
    flex-shrink: 0;
`