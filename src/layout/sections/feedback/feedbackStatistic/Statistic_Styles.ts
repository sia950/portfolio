import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

const Statistic = styled.div`
width: 195px;
font-family: "Playfair Display", sans-serif;
font-weight: 700;

    h2{
    font-size: 30px;
    margin-bottom: 10px;
    }

    span{
    font-size: 50px;
    color: ${theme.colors.accent};
    }
`
export const S = {
    Statistic
}