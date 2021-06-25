import React from 'react'
import { ProfileHeaderContainer } from '../style/style'

export const ProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer buttonColor={props.buttonColor}>
            <section>
                <h4 onClick={props.goToLastPage}>&#x2190;</h4>
                <h5>#{props.login}</h5>
            </section>
            <p onClick={props.function}>{props.buttonWord}</p>
        </ProfileHeaderContainer>
    )
}