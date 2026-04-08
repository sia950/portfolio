import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { font } from '../../styles/Common'

type TypeButton = {
  $padding: string
  $btnType?: "transparent"
  $textDecoration?: boolean
  children: ReactNode
  $fontWeight?: string
  $fontSize?: string;
  as?: any;     
  to?: string   
  smooth?: boolean
  onClick?: () => void 
}

export const Button: React.FC<TypeButton> = (props: TypeButton) => {
  return (
    <StyledButton
      onClick={props.onClick}
      $fontWeight={props.$fontWeight}
      $padding={props.$padding}
      $btnType={props.$btnType}
      $textDecoration={props.$textDecoration}
      $fontSize={props.$fontSize}
      as={props.as}     
      to={props.to}      
      smooth={props.smooth}
    >
      {props.children}</StyledButton>
  )
}

const StyledButton = styled.a<{ $padding: string; $btnType?: "transparent"; $textDecoration?: boolean; $fontWeight?: string; $fontSize?: string; }>`
    display: inline-flex;
    user-select: none;
    align-items: center;
    border-radius: 24px;
    white-space: nowrap;
    
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    transition: ${theme.animations.transition};


    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    gap: 10px;
    background: ${props => props.$btnType === 'transparent' ? 'transparent' : theme.colors.accent};
    text-decoration:  ${props => props.$textDecoration === true ? 'underline' : 'none'};
    padding: ${props => props.$padding};
    font-weight: ${props => props.$fontWeight || "400"};
    ${font({ color: theme.colors.font, Fmax: 20, Fmin: 16 })};

    @media ${theme.media.mobile}{

    }

`