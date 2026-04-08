import React from 'react'
import { Button } from '../../../../components/button/Button'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Logo } from '../../../../components/logo/Logo'
import { Menu } from '../menu/Menu'
import { Link } from 'react-scroll'

export const DesktopMenu: React.FC = () => {
    return (
        <nav>
            <FlexWrapper $justify='space-between' $align='center'>
                <Logo/>
                <Menu $direction={'row'}/>
                <Button as={Link} to="footer" smooth={true} $padding="10px 20px" $fontWeight='500'>{"Contact Me"}</Button>
            </FlexWrapper>
        </nav>
    )
}
