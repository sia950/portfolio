import { theme } from './../../../styles/Theme';
import styled, { css } from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import Link from "react-scroll/modules/components/Link"

// =============Menu================
const List = styled.nav<{ $directionWay: "row" | "column", $alignItems?: string }>`
        display:flex;
        gap: 40px;
        flex-direction: ${props => props.$directionWay};
        align-items: ${props => props.$alignItems || "flex-start"};
`

const ListItem = styled.ul`
        font-size: 20px;
        cursor: pointer;
       
`

const Li = styled.li`
         position: relative;
`

const Mask = styled.span`
    pointer-events: none;
    display: inline-block;
    position: absolute;
    overflow-y: hidden;
    top: 0;
    left: 0;
    height: 50%;
    color: ${theme.colors.font}; 
    transition: ${theme.animations.transition}; // Для плавности анимации
    & + & {
        top: 50%;

        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const NavLink = styled(Link)`
        color: transparent;

            &::before{
                display: block;
                height: 1px;
                background-color: ${theme.colors.accent};
                content: "";
                position: absolute;
                top: 50%;
                left: -10px;
                right: -10px;
                z-index: 1;
                transform: scale(0)  
            }

            &:hover, &.active{

                &::before{
                    transform: scale(1);
                }

                ${Mask}{
                    font-size: 20px;
                    color: ${theme.colors.accent};
                    cursor: pointer;
                    transform: skewX(12deg) translateX(5px);
        
                    & + ${Mask}{
                    transform: skewX(12deg) translateX(-5px);
                    }
                }
            }
    `

// ==========MobileMenu====================

const BurgerButton = styled.button<{ isOpen: boolean }>`
    background-color: ${theme.colors.secondaryBg};
    border-radius: 12px;

    z-index: 99999;
    position: fixed;
    top: 25px;
    right: 20px;
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
        display: block;
        position: relative;
        width: 35px;
        height: 4px;
        background-color: ${theme.colors.font};
        border-radius: 12px;
        

        ${props => props.isOpen && css`
            background-color: transparent;
        `}

        &::before,
        &::after {
            background-color: ${theme.colors.font};
            border-radius: 12px;
            content: "";
            position: absolute;
            left: 0;
            width: 35px;
            height: 4px;
            
        }

        &::before {
            transform: translateY(-10px);
        }

        &::after {
            transform: translateY(10px);
        }

        ${props => props.isOpen && css`
            &::before {
                transform: rotate(-45deg);
            }
            &::after {
                transform: rotate(45deg);
            }
        `}
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    background-color: rgba(255, 227, 227, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    
    /* 1. Управление видимостью */
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    
    /* 2. Управление положением (двигаем сам элемент) */
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    
    /* 3. Единая настройка анимации для ОТКРЫТИЯ */
    transition: transform 1s ease-in-out, visibility 0s;

    /* 4. Настройка анимации специально для ЗАКРЫТИЯ */
    ${props => !props.isOpen && css`
        transition: transform 1s ease-in-out, visibility 0s 1s; 
    `}

    ${FlexWrapper} {
        height: 100vh;
    }
`



export const S = {
    // Menu
    Li,
    List,
    Mask,
    ListItem,
    NavLink,

    // MonileMenu
    BurgerButton,
    MobileMenuPopup,

}