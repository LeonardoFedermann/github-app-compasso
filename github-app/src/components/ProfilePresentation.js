import React from 'react'
import { ProfilePresentationContainer } from '../style/style'

export const ProfilePresentation = (props) => {
    return (
        <ProfilePresentationContainer >
            <section>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
                <p>{props.location}</p>
            </section>
        </ProfilePresentationContainer >
    )
}