import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import main from '../../../assets/images/main.jpg'
import { font } from '../../../styles/Common'

/////////////////////////////////////////////////////
// MAIN WRAPPER
/////////////////////////////////////////////////////
const MainSection = styled.section`
    z-index: 1;
    min-height: 100vh; /* keeps hero full screen */

    width: 100%;
    position: relative;

    display: flex;
    align-items: center;
`

/////////////////////////////////////////////////////
// BACKGROUND LAYOUT
/////////////////////////////////////////////////////

const BgWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    z-index: -1;

    /* mobile: stack background */
    @media ${theme.media.preTablet} {
        flex-direction: column-reverse;
    }
`

/////////////////////////////////////////////////////
// LEFT BACKGROUND COLOR BLOCK
/////////////////////////////////////////////////////

const SectionBgc = styled.div`
    background-color: ${theme.colors.primaryBg};
    width: 50%;

    /* mobile: full width split */
    @media ${theme.media.preTablet} {
        width: 100%;
        height: 50%;
    }
`

/////////////////////////////////////////////////////
// RIGHT BACKGROUND IMAGE
/////////////////////////////////////////////////////

const BgPhoto = styled.div`
    width: 50%;

    background-image: url(${main});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media ${theme.media.preTablet} {
        width: 100%;
        height: 50%;
    }
`

/////////////////////////////////////////////////////
// CONTENT BLOCK 
/////////////////////////////////////////////////////

const Content = styled.div`
    color: ${theme.colors.font};

    max-width: 600px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${theme.media.preTablet} {

        justify-content: flex-start;

        margin-top: calc(50vh + 60px);
        margin-bottom: 70px;
    }
`

/////////////////////////////////////////////////////
// TEXT BLOCK
/////////////////////////////////////////////////////

const About = styled.div`
    h2 {
        width: 100%;
        white-space: nowrap;

    ${font({
        fontWeight: 700,
        Fmax: 90,
        Fmin: 50,
        fontFamily: "'Playfair Display', sans-serif"
    })};
    
        @media ${theme.media.preTablet} {
            white-space: normal;
        }
    }

    h1,
    h1 .Typewriter__wrapper  {
        
        ${font({
        color: theme.colors.accentSecondary,
        fontWeight: 400,
        lineHeight: 1.8,
        Fmax: 20,
        Fmin: 16
        })};
        
        margin-top: 10px;
        margin-bottom: 30px;
        max-width: 400px;
        min-height: 72px;

    }

    h1 p{
        display: none;
    }

    span {
        color: ${theme.colors.font};
    }

    @media ${theme.media.preTablet} {
        h1 {
            margin-top: 28px;
        }
    }
    @media ${theme.media.mobile} {
        h1 {
            width: 335px;
        }
    }
`

export const S = {
    MainSection,
    BgWrapper,
    SectionBgc,
    BgPhoto,
    Content,
    About

}