import React from 'react'
import { ReposHeaderContainer } from '../style/style'
import { goBack } from '../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const StarredReposHeader = (props) => {
    const history = useHistory()

    return (
        <ReposHeaderContainer>
            <h4 onClick={() => goBack(history)}>&#x2190;</h4>
            <h4>{props.username} tem {props.starredRepos} repositórios estrelas</h4>
        </ReposHeaderContainer>
    )
}