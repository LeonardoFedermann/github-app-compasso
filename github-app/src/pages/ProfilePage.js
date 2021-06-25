import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { MainContainer, ProfileImage } from '../style/style'
import { BASE_URL } from '../base url/BaseURL'
import { ProfileHeader } from '../components/ProfileHeader'
import { goBack, goToSearchPage } from '../coordinator/Coordinator'
import { ProfilePresentation } from '../components/ProfilePresentation'
import { ProfileNumbers } from '../components/ProfileNumbers'
import { ProfileBio } from '../components/ProfileBio'
import { Loading } from '../components/Loading'

export default function ProfilePage() {
    const [user, setUser] = useState({})
    const [starred, setStarred] = useState([])
    const history = useHistory()
    const { username } = useParams()

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            const starred = await axios.get(`${BASE_URL}/users/${username}/starred`)
            setStarred(starred.data)
            setUser(user.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            {!user.login ?
                <Loading /> :
                <>
                    <ProfileHeader
                        login={user.login}
                        function={() => goToSearchPage(history)}
                        buttonWord={'Buscar usuário'}
                        buttonColor={'green'}
                        goToLastPage={() => goBack(history)}
                    />
                    <ProfileImage alt={user.login} src={user.avatar_url} />
                    <ProfilePresentation
                        name={user.login && user.name ?
                            user.name :
                            user.login}
                        email={user.email}
                        location={user.location}
                    />
                    <ProfileNumbers
                        login={user.login}
                        followers={user.followers}
                        following={user.following}
                        repos={user.public_repos}
                        starred={starred.length}
                    />
                    <ProfileBio
                        bio={user.bio}
                    />
                </>
            }
        </MainContainer>
    )
}