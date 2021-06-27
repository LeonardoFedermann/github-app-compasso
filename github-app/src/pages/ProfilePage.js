import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { MainContainer } from '../style/mainContainerStyle'
import { ProfileImage } from '../style/profileStyle'
import { BASE_URL } from '../base url/BaseURL'
import { ProfileHeader } from '../components/Profiles/ProfileHeader'
import { goBack, goToSearchPage } from '../coordinator/Coordinator'
import { ProfilePresentation } from '../components/Profiles/ProfilePresentation'
import { ProfileNumbers } from '../components/Profiles/ProfileNumbers'
import { ProfileBio } from '../components/Profiles/ProfileBio'
import { Loading } from '../components/Loading/Loading'

export default function ProfilePage() {
    const [user, setUser] = useState({})
    const [starred, setStarred] = useState([])
    const history = useHistory()
    const { username } = useParams()

    useEffect(() => {
        getUser()
        document.title = `Perfil de ${username}`
    }, [])

    const getUser = async () => {
        try {
            const user = await axios.get(`${BASE_URL}/${username}`)
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
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