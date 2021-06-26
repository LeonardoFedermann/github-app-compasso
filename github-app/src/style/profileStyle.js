import styled from 'styled-components'
import {primary, secondary, darkColor} from './colors'

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
    color: ${secondary};
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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