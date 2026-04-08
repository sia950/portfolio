import styled from "styled-components"
import { theme } from "../../../../styles/Theme"

/////////////////////////////////////////////////////
// WRAPPER
/////////////////////////////////////////////////////

const SliderWrapper = styled.div`
    max-width: 895px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 20px;

`

/////////////////////////////////////////////////////
// MAIN CONTENT LAYOUT
/////////////////////////////////////////////////////

const FeedbackWrapper = styled.div`
    display: flex;
    align-items: flex-start;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
    }
`

/////////////////////////////////////////////////////
// IMAGE
/////////////////////////////////////////////////////

const ClientPhoto = styled.img`
    width: 100%;
    max-width: 390px;

    aspect-ratio: 1 / 1;

    object-fit: cover;

    border-radius: 24px;

    flex-shrink: 0;

    margin-right: 15px;

    @media ${theme.media.tablet} {
        margin-right: 0;
        max-width: 100%;
    }
`

/////////////////////////////////////////////////////
// TEXT BLOCK
/////////////////////////////////////////////////////

const Note = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.8;

    position: relative;
    padding-top: 60px;

    &::before {
        font-family: "Playfair Display", sans-serif;
        color: ${theme.colors.accentTertiary};
        content: "“";

        position: absolute;
        top: 0;

        font-size: 100px;
        line-height: 1;

    }
`

/////////////////////////////////////////////////////
// ARROWS
/////////////////////////////////////////////////////

const ArrowWrapper = styled.div`
    display: flex;
    gap: 15px;

    justify-content: center;

    margin-top: 10px;

    button.noMoreNotes {
        opacity: 0.5;
    }
`

/////////////////////////////////////////////////////
// BUTTON
/////////////////////////////////////////////////////

const ArrowButton = styled.button`
    width: 40px;
    height: 40px;

    background: transparent;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: ${theme.colors.accent};

    transition: opacity 1s ease;

`

export const S = {
    SliderWrapper,
    FeedbackWrapper,
    ClientPhoto,
    Note,
    ArrowWrapper,
    ArrowButton
}