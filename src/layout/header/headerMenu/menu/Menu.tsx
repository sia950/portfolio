import React from 'react'
import { S } from '../headerMenu_Styles'

type MenuProps = {
    $direction: 'row' | 'column'
    $align?: string
    onItemClick?: () => void
}

const menuItems = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Feedback",
        href: "feedback"
    }
]

export const Menu: React.FC<MenuProps> = ({ $direction, $align, onItemClick }) => {
    return (
        <S.List $directionWay={$direction} $alignItems={$align}>
            {menuItems.map((item, index) => {
                return (
                    <S.ListItem key={index}>
                        <S.Li>
                            <S.NavLink onClick={onItemClick} to={item.href} smooth={true} activeClass="active" spy={true}>{item.title}
                                <S.Mask>
                                    <span>{item.title}</span>
                                </S.Mask>
                                <S.Mask>
                                    <span>{item.title}</span>
                                </S.Mask>
                            </S.NavLink>
                        </S.Li>
                    </S.ListItem>
                )
            })}
        </S.List>
    )
}


