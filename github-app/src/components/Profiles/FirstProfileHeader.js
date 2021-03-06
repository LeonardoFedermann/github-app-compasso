import React from 'react'
import { ProfileHeaderContainer } from '../../style/profileStyle'

export const FirstProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer buttonColor={props.buttonColor}>
            <h5>#{props.login}</h5>
            <p onClick={props.function}>Search a user</p>
        </ProfileHeaderContainer>
    )
}