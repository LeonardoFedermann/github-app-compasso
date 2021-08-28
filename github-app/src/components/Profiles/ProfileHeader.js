import React from 'react'
import { ProfileHeaderContainer } from '../../style/profileStyle'

export const ProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer>
            <section>
                <h4 onClick={props.goToLastPage}>
                    &#x2190;
                </h4>
                <h5>#{props.login}</h5>
            </section>
            <p onClick={props.function}>
                Search a user
            </p>
        </ProfileHeaderContainer>
    )
}