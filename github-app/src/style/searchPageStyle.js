import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/button'
import { primary } from './colors'

export const SearchContainer = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${primary};
color: white;
font-family: 'Arial';
img{
    width: 30%;
    margin-top: 5%;
    @media(min-width:600px){
        width: 15%;
    }
}
`

export const SearchForm = styled.form`
width: 90%;
height: 18%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media(min-width:600px){
    width: 40%;
}
`

export const StyledTextField = styled(TextField)`
width: 100%;
`

export const StyledButton = styled(Button)`
width: 100%;
`