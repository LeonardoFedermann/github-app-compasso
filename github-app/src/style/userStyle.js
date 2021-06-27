import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { primary, borderColor, darkColor } from './colors'


export const UserCardContainer = styled.section`
height: 90px;
width: 100%;
padding: 5% 0;
border: 1px solid ${borderColor};
display: flex;
align-items: center;
justify-content: space-between;
@media(min-width: 1100px){
    width: 50%;
    border: 1px solid ${borderColor};
    border-radius: 10px;
    padding: 1.5%;
    margin-top: 3%;
}
section{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width:70%;
    h4{
        margin-left: 5%;
    }
}
img{
    margin-left: 5%;
    width: 60px;
    border-radius: 50%;
    border: 2px solid white;
}
h2{
    margin-right: 7%;
    cursor: pointer;
}
`

export const UsersListHeaderContainer = styled.header`
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

export const SearchUserContainer = styled.section`
width: 100%;
padding: 2% 0;
background-color: ${primary};
display: flex;
align-items: center;
justify-content: center;
`

export const StyledTextField = styled(TextField)`
width: 70%;
`