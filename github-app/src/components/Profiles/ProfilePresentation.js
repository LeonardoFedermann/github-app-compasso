import React from 'react'
import { ProfilePresentationContainer } from '../../style/profileStyle'

export const ProfilePresentation = (props) => {
    return (
        <ProfilePresentationContainer
            role="show profile's main information (name, email and location of residence)."
        >
            <section>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
                <p>{props.location}</p>
            </section>
        </ProfilePresentationContainer >
    )
}