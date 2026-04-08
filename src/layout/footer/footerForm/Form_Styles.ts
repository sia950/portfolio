import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Form = styled.form`
width: 500px;
textarea{
    resize: none;
}

button{
    width: 148px;
    font-weight: 500;
    font-size: 30px;
    color: ${theme.colors.accent};
    
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    
}

@media ${theme.media.mobile} {
    width: 335px;
}
    
`
const FieldWrapper = styled.div`
label{
    ${font({fontWeight: 500, Fmax: 30, Fmin: 22})}
}`

const Field = styled.input`
    width: 100%;
    height: 60px;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid ${theme.colors.accentTertiary};
    margin-bottom: 40px;
    color: ${theme.colors.font};
    font-family: "Poppins", sans-serif;;
    font-weight: 400;
    font-size: 20px;
`

export const S = {
    Form,
    FieldWrapper,
    Field,
    
}