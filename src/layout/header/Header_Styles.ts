import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  background-color: ${theme.colors.secondaryBg};
  border-radius: 50px;
  position: fixed;
  top: 10px;
  left: 20px;
  right: 20px;
  z-index: 99999;

  
`

export const S = {
    Header,
}