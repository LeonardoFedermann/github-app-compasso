import React from 'react'
import { ReposCardContainer } from '../../style/repoStyle'

export const RepoCard = (props) => {
    return (
        <ReposCardContainer>
            <section>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p><strong>&#9733;</strong> {props.stargazers}</p>
            </section>
        </ReposCardContainer>
    )
}