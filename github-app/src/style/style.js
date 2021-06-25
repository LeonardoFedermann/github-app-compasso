import styled from 'styled-components'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/button'

// COLORS
export const primary = '#3b444b'
export const secondary = '#ffc425'
export const darkColor = '#232b2b'
export const borderColor = '#a7adba'

//MAIN CONTAINER
export const MainContainer = styled.main`
width: 100%;
height: 100vh;
overflow-y: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ${primary};
color: white;
font-family: 'Arial';
`

// SEARCH PAGE
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
    @media(min-width:1100px){
        width: 10%;
    }
}
`

export const SearchForm = styled.form`
width: 90%;
height: 18%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media(min-width:1100px){
    width: 40%;
}
`

export const StyledTextField = styled(TextField)`
width: 100%;
color: white;
`

export const StyledButton = styled(Button)`
width: 100%;
`

// PROFILE PAGE
export const ProfileImage = styled.img`
width: 100px;
border-radius: 50%;
border: 5px solid white;
transform: translatey(-7.5vh);
@media(min-width:1100px){
    width: 150px;
}
`

export const ProfileHeaderContainer = styled.header`
width: 100%;
height: 15vh;
background-color: ${darkColor};
display: flex;
justify-content: space-between;
align-items: start;
h3{
    color: white;
    margin: 5%;
}
p{
    color: ${props=>props.buttonColor};
    margin-right: 5%;
    cursor: pointer;
}
h4{
    margin-left: 5%;
    cursor: pointer;
}
h5{
    margin-left: 5%;
    transform: scale(1.1);
}
section{
    width: 50%;
    display: flex;
}
`

export const ProfilePresentationContainer = styled.section`
width: 100%;
height: 10vh;
margin-bottom: 3vh;
background-color: ${primary};
display: flex;
align-items: center;
justify-content: flex-end;
section{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    @media(min-width:1100px){
        width: 100%;
        align-items:center;
    }
    h1{
        margin-bottom: 2%;
        @media(min-width:1100px){
            transform:scale(2);
        }
    }
    p{
        margin: 0;
        @media(min-width:1100px){
            transform:scale(1.5);
        }
    }
}
`

export const ProfileNumbersContainer = styled.section`
width: 100%;
height: 15vh;
background-color: ${darkColor};
display:flex;
align-items: center;
justify-content: space-around;
section{
    height: 100%;
    width: 25%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1{
        margin: 0;
        font-size: 2em;
        @media(min-width:1100px){
            font-size: 3em;
        }
    }
    p{
        margin: 0;
        font-size: 90%;
        @media(min-width:1100px){
            font-size: 100%;
        }
    }
}
`

export const ProfileBioContainer = styled.section`
width: 100%;
display: flex;
flex-direction: column;
p{
    margin: 2% 10% 0 10%;
    @media(min-width:1100px){
        font-size: 1.5em;
        margin: 1% 10% 0 15%;
    }
}
h1{
    margin: 5% 10% 0 10%;
    @media(min-width:1100px){
        font-size: 2em;
        margin: 1% 10% 0 15%;
    }
}
`

// REPOS
export const ReposHeaderContainer = styled.header`
width: 100%;
height: 75px;
background-color: ${darkColor};
display: flex;
justify-content: flex-start;
align-items: center;
h4{
    color: white;
    margin: 5%;
}
p{
    color: red;
    margin: 5%;
    cursor: pointer;
}
`

export const ReposCardContainer = styled.section`
height: 90px;
width: 100%;
margin-top: 5%;
border-bottom: 1px solid ${borderColor};
display: flex;
align-items: start;;
justify-content: flex-end;
div{
    width: 90%;
    h3{
        margin: 0;
    }
}
`

//LIST OF FOLLOWERS AND FOLLOWING USERS
export const UserCardContainer = styled.section`
height: 90px;
width: 100%;
padding: 5% 0;
border-bottom: 1px solid ${borderColor};
display: flex;
align-items: center;
justify-content: space-between;
div{
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
}
`

export const UsersListHeaderContainer = styled.header`
width: 100%;
height: 75px;
background-color: ${darkColor};
display: flex;
justify-content: flex-start;
align-items: center;
h4{
    color: white;
    margin: 5%;
}
p{
    color: red;
    margin: 5%;
    cursor: pointer;
}
`

// ERROR PAGE
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
img{
    width: 30%;
}
`

// LOADING
export const LoadingContainer = styled.section`
margin-top: 10%;
`