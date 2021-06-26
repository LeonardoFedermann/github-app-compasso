import React from 'react'
import { UserCardContainer } from '../../style/userStyle'

export const UserCard = (props) => {
    return (
        <UserCardContainer>
            <section>
                <img alt={props.login} src={props.imageUrl} />
                <h4>{props.login}</h4>
            </section>
            <h2 onClick={props.checkUser}>&#8594;</h2>
        </UserCardContainer>
    )
}