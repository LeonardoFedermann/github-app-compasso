import React from 'react'
import { ProfileBioContainer } from '../../style/profileStyle'

export const ProfileBio = (props) => {
    return (
        <ProfileBioContainer
        role="show profile's bio"
        >
            {props.bio &&
                <>
                    <h1>BIO</h1>
                    <p>{props.bio}</p>
                </>
            }
        </ProfileBioContainer>
    )
}