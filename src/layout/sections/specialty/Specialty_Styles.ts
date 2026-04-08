import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Common"

const SpecialtySection = styled.section`
  background-color: ${theme.colors.secondaryBg};
  padding: 100px 0;

  @media ${theme.media.tablet}{
    ${FlexWrapper}{
      flex-direction: column;
    }
  }

  @media ${theme.media.mobile}{
    padding: 40px 0 90px;
  }

  ${FlexWrapper}{
    gap: 58px;
  }
  
`
const ExpirienceWrapper = styled.div`
  margin-top: 20px;
  font-family:"Playfair Display", sans-serif;
  font-weight: 700;

  span{
    color: ${theme.colors.accent};
    font-size: 100px;
  }

  h2{
     ${font({Fmax: 40, Fmin: 26, lineHeight: 1.8, fontFamily: "'Playfair Display', sans-serif", fontWeight: 700})};
  }

  @media ${theme.media.preTablet}{
    margin-top: 0;
  }

  @media ${theme.media.tablet}{
    display: flex;
    gap: 50px;
    justify-content: center;

  }

`

const SpecializedWrapper = styled.div`

  h2{
    margin-bottom: 20px;
    text-align: center;
    ${font({Fmax: 40, Fmin: 24, lineHeight: 1.8, fontWeight: 700})};
  }

  @media ${theme.media.mobile} {
    h2{
    margin-bottom: 70px;
    }
  }
  
`

const BlockWrapper = styled.div`

  display: flex;
  gap: 15px;

  @media ${theme.media.preTablet} {
    flex-wrap: wrap;
  }

  @media ${theme.media.mobile} {
    gap: 25px;
  }


`


const SpecialtyBlock = styled.div`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.font};
  border-radius: 48px;
  min-height: 295px;
  width: 100%;
  padding: 30px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;

  h3{
    font-weight: 700;
    font-size: 20px;
  } 

`

export const S = {
    SpecialtySection, 
    ExpirienceWrapper,
    SpecializedWrapper, 
    BlockWrapper,
    SpecialtyBlock
}