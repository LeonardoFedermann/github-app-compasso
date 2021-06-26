import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { darkColor, borderColor, primary } from './colors'

export const ReposHeaderContainer = styled.header`
width: 100%;
height: 75px;
background-color: ${darkColor};
display: flex;
justify-content: flex-start;
align-items: center;
position: sticky;
top: 0;
h4{
    color: white;
    margin: 5%;
    cursor:pointer;
}
h5{
    transform: scale(1.1);
}
p{
    color: red;
    margin: 5%;
    cursor: pointer;
}
`

export const ReposCardContainer = styled.section`
width: 100%;
border: 1px solid ${borderColor};
display: flex;
align-items: start;;
justify-content: flex-end;
max-height: 150px;
padding: 2.5%;
@media(min-width: 1100px){
    width: 50%;
    border: 1px solid ${borderColor};
    border-radius: 10px;
    padding: 1.5%;
    margin-top: 3%;
}
section{
    width: 90%;
    h3{
        margin: 0;

    }
    p{
        margin-bottom: 0;
        width:90%;
    }
}
`

export const SearchRepoContainer = styled.section`
width: 100%;
padding: 2%;
// heigth: 15vh;
background-color: ${primary};
display: flex;
align-items: center;
justify-content: center;
`

export const StyledTextField = styled(TextField)`
width: 70%;
color: white;
`