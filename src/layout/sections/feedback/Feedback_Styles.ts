import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Feedback = styled.section`
  background-color: ${theme.colors.primaryBg};
  padding: 100px 0;
  position: relative;
  @media ${theme.media.mobile}{
    padding: 40px 0 90px;

  }
`

export const S = {
    Feedback,
}  