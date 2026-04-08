import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const SocialsList = styled.nav`
     
    
    ul{
        display: flex;
        gap: 50px;
    }
    
    a{
        transition: transform 1s ease;
        color: ${theme.colors.font};
        cursor: pointer;
        display: inline-block;
        
        &:hover {
            transform: translateY(-5px);
        }
    }

    @media screen and (max-width: 1205px){
        margin: 0 auto;
    }

`

export const S = {
    SocialsList
}