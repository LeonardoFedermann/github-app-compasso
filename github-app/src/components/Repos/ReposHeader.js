import React from 'react'
import { ReposHeaderContainer } from '../../style/repoStyle'
import { goBack } from '../../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const ReposHeader = (props) => {
    const history = useHistory()

    return (
        <ReposHeaderContainer>
            <h4 onClick={() => goBack(history)}>&#x2190;</h4>
            <h5>{props.showingPhrase}</h5>
        </ReposHeaderContainer>
    )
}