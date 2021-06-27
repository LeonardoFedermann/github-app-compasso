import React from 'react'
import { UsersListHeaderContainer } from '../../style/userStyle'
import { goBack } from '../../coordinator/Coordinator'
import { useHistory } from 'react-router-dom'

export const UsersListHeader = (props) => {
    const history = useHistory()

    return (
        <UsersListHeaderContainer>
            <h4
                role="go back to last page"
                onClick={() => goBack(history)}
            >
                &#x2190;
            </h4>
            <h5
                role="phrase that will be shown in page's header"
            >
                {props.showingPhrase}
            </h5>
        </UsersListHeaderContainer>
    )
}