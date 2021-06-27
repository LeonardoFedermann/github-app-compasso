import React from 'react'
import { ProfileHeaderContainer } from '../../style/profileStyle'

export const FirstProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer buttonColor={props.buttonColor}>
            <h5>#{props.login}</h5>
            <p
                role="go to search profile page"
                onClick={props.function}
            >
                Buscar usuário
            </p>
        </ProfileHeaderContainer>
    )
}