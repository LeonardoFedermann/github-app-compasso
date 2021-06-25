import React, { useState } from 'react'
import axios from 'axios'
import { MainContainer } from '../style/style'
import { UserCard } from '../components/UserCard'
import { UsersListHeader } from '../components/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { goToProfile } from '../coordinator/Coordinator'
import { Loading } from '../components/Loading'

export default function FollowersPage() {
    const [followers, setFollowers] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const history = useHistory()
    const { username } = useParams()

    useEffect(() => {
        getFollowers()
    }, [])

    setTimeout(()=>{
        setShowLoading(false)
    }, 5000)

    const getFollowers = async () => {
        try {
            const followers = await axios.get(`${BASE_URL}/users/${username}/followers`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setFollowers(followers.data)
            setQuantity(user.data.followers)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={`${quantity} usuários seguem ${username}`}
            />
            {!followers[0] ?
                showLoading && <Loading /> :
                <>
                    {followers && followers.map((follower) => {
                        return (
                            <UserCard
                                login={follower.login}
                                imageUrl={follower.avatar_url}
                                checkUser={() => goToProfile(history, follower.login)}
                            />
                        )
                    })}
                </>
            }
        </MainContainer>
    )
}