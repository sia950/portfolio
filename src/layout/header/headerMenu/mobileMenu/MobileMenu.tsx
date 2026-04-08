import React, { useState } from 'react'
import { Button } from '../../../../components/button/Button'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Menu } from '../menu/Menu'
import { S } from '../headerMenu_Styles'
import { Logo } from '../../../../components/logo/Logo'
import { Link } from 'react-scroll'

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }

    const closeMenu = () => setMenuIsOpen(false)

    return (
        <nav>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen}>
                <FlexWrapper $direction="column">
                    <Logo onLogoClick={closeMenu} $pl={'35px'} $pt={'35px'}  />
                    <FlexWrapper $direction="column" $justify="center" $align="center" $gap="70px">
                        <Menu onItemClick={closeMenu}  $direction={'column'} $align='center' />
                        <Button onClick={closeMenu}  as={Link} to="footer" smooth={true} $padding="20px 40px" $fontWeight='500' $fontSize='35px'>{"Contact Me"}</Button>
                    </FlexWrapper>
                </FlexWrapper>
            </S.MobileMenuPopup>
        </nav>
    )
}
