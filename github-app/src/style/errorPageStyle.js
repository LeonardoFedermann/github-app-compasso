import styled from 'styled-components'
import Button from '@material-ui/core/button'
import { primary } from './colors'

export const ErrorContainer = styled.main`
width: 85%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${primary};
color: white;
font-family: 'Arial';
@media(min-width:600px){
    width: 60%;
}
img{
    width: 30%;
    @media(min-width:600px){
        width: 30%;
    }
}
`

export const StyledButton = styled(Button)`
width: 100%;
@media(min-width:600px){
    width: 50%;
}
`