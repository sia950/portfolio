import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { animateScroll as scroll } from 'react-scroll'

type StyledLogoTypeProps = {
  $pl?: string,
  $pt?: string,
  onLogoClick?: () => void;
}

export const Logo: React.FC<StyledLogoTypeProps> = (props: StyledLogoTypeProps) => {

  const handleLogoClick = () => {
      // 1. Сначала скроллим наверх
    scroll.scrollToTop();
      
      // 2. Если передана функция закрытия меню, вызываем её
    if (props.onLogoClick) {
      props.onLogoClick();
    }
  };

  return (
    <StyledLogo
      $pl={props.$pl}
      $pt={props.$pt}
      onClick={handleLogoClick} // Вешаем общую функцию на стандартный onClick}
    >
      <Icon iconId={'logo'} height="45" width="72" viewBox="0 0 72 45" />
    </StyledLogo>

  )
}

const StyledLogo = styled.a<StyledLogoTypeProps>`
  color: ${theme.colors.font};
  display: inline-block; 
  cursor: pointer;     
  padding-top: ${props => props.$pt || '25px'};
  padding-left: ${props => props.$pl || '30px'};
`