import React from 'react'
import { UsersListHeaderContainer } from '../../style/userStyle'
import { goBack } from '../../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const UsersListHeader = (props) => {
    const history = useHistory()

    return (
        <UsersListHeaderContainer>
            <h4 onClick={() => goBack(history)}>&#x2190;</h4>
            <h5>{props.showingPhrase}</h5>
        </UsersListHeaderContainer>
    )
}