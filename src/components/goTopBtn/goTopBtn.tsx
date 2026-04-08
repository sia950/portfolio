import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'
import { animateScroll as scroll } from 'react-scroll'

export const GoTopBtn: React.FC = () => {
    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }

        })

    }, [])

    return (
        <>
            {showBtn && (<GoTop onClick={() => { scroll.scrollToTop() }}>
                <Icon iconId={'goTop'} width="16" height="15" viewBox="0 0 16 15" />
            </GoTop>)}
        </>

    )
}

const GoTop = styled.div`
    width: 30px;
    height: 30px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    color: ${theme.colors.font};
    padding: 8px;
    background-color: #ffffff83;
    border-radius: 12px;
    z-index: 10;

`