import React from 'react'
import { ProfileHeaderContainer } from '../style/style'

export const FirstProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer buttonColor={props.buttonColor}>
            <h5>#{props.login}</h5>
            <p onClick={props.function}>{props.buttonWord}</p>
        </ProfileHeaderContainer>
    )
}