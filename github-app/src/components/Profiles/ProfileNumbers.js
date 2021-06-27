import React from 'react'
import { useHistory } from 'react-router-dom'
import { ProfileNumbersContainer } from '../../style/profileStyle'
import {
    goToListOfFollowers,
    goToListOfFollowingUsers,
    goToReposList,
    goToStarredList
}
    from '../../coordinator/Coordinator'

export const ProfileNumbers = (props) => {
    const history = useHistory()

    return (
        <ProfileNumbersContainer >
            <section
                role="go to list of followers"
                onClick={() => goToListOfFollowers(history, props.login)}
            >
                <h1>{props.followers}</h1>
                <p>Seguidores</p>
            </section>
            <section
                role="go to list of following users"
                onClick={() => goToListOfFollowingUsers(history, props.login)}
            >
                <h1>{props.following}</h1>
                <p>Seguindo</p>
            </section>
            <section
                role="go to list of repositories"
                onClick={() => goToReposList(history, props.login)}
            >
                <h1>{props.repos}</h1>
                <p>Repos</p>
            </section>
            <section
                role="go to list of starred repositories"
                onClick={() => goToStarredList(history, props.login)}
            >
                <h1>{props.starred}</h1>
                <p>Estrelas</p>
            </section>
        </ProfileNumbersContainer >
    )
}