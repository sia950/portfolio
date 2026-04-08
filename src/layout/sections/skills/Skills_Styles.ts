import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Skills = styled.div`
    background-color: ${theme.colors.tertiaryBg};
    position: relative;
`

const SkillsWrapper = styled.div`
  overflow-x: scroll;
  color: ${theme.colors.font};
  padding: 50px 0;
  max-width: 1180px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 170px;

  scrollbar-width: none;
  -ms-overflow-style: none;
  

  &::-webkit-scrollbar {
    display: none;
  }

  -webkit-overflow-scrolling: touch;

  @media ${theme.media.mobile}{
      gap: 40px;
      padding-left: 15px;
  }

`
export const S = {
    Skills,
    SkillsWrapper
}