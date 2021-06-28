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
        <ProfileNumbersContainer
            role="navigation"
        >
            <section onClick={() => goToListOfFollowers(history, props.login)}>
                <h1>{props.followers}</h1>
                <p>Seguidores</p>
            </section>
            <section onClick={() => goToListOfFollowingUsers(history, props.login)}>
                <h1>{props.following}</h1>
                <p>Seguindo</p>
            </section>
            <section onClick={() => goToReposList(history, props.login)}>
                <h1>{props.repos}</h1>
                <p>Repos</p>
            </section>
            <section onClick={() => goToStarredList(history, props.login)}>
                <h1>{props.starred}</h1>
                <p>Estrelados</p>
            </section>
        </ProfileNumbersContainer >
    )
}