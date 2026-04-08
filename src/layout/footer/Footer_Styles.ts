import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

const Footer = styled.footer`
    background-color: ${theme.colors.tertiaryBg};
    padding-bottom: 50px;
    position: relative;

    @media ${theme.media.mobile} {
        padding-bottom: 30px;
        
    }
`

const ContentWrapper = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: start;

    gap: 100px;

    padding: 100px 0;

    @media (max-width: 1205px) {
        grid-template-columns: 1fr;

        justify-items: center;
    }

    @media ${theme.media.mobile} {
        gap: 90px;
        padding: 60px 0 120px;
    }
`

const Heading = styled.h2`
    ${font({fontWeight: 700, Fmax: 100, Fmin: 50})}

`
    const Copyright = styled.small`
    ${font({fontWeight: 500, Fmax: 20, Fmin: 16, lineHeight: 1.8})}
    letter-spacing: 0.02em;
    text-align: center;
    color: ${theme.colors.accentSecondary};
    display: block;
    width: 100%;

    span{
    font-weight: 700;
    color: ${theme.colors.font};
    }

`

export const S = {
    Footer,
    ContentWrapper,
    Heading,
    Copyright,
    
}
