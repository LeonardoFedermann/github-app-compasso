import React from 'react'
import { ProfileHeaderContainer } from '../../style/profileStyle'

export const ProfileHeader = (props) => {
    return (
        <ProfileHeaderContainer>
            <section>
                <h4
                    role="go back to last page"
                    onClick={props.goToLastPage}
                >
                    &#x2190;
                </h4>
                <h5>#{props.login}</h5>
            </section>
            <p
                role="go to search profile page"
                onClick={props.function}
            >
                Buscar usuário
            </p>
        </ProfileHeaderContainer>
    )
}