import React, { useState, useContext } from 'react'
import axios from 'axios'
import { MainContainer } from '../style/style'
import { UserCard } from '../components/UserCard'
import { goToProfile } from '../coordinator/Coordinator'
import { UsersListHeader } from '../components/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { Loading } from '../components/Loading'

export default function FollowingPage() {
    const [followingUsers, setFollowingUsers] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const history = useHistory()
    const { username } = useParams()

    useEffect(() => {
        getFollowingUsers()
    }, [])

    setTimeout(()=>{
        setShowLoading(false)
    }, 5000)


    const getFollowingUsers = async () => {
        try {
            const followingUsers = await axios.get(`${BASE_URL}/users/${username}/following`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setFollowingUsers(followingUsers.data)
            setQuantity(user.data.following)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={`${username} segue ${quantity} usuários`}
            />
            {!followingUsers[0] ?
                showLoading && <Loading /> :
                <>
                    {followingUsers && followingUsers.map((followingUser) => {
                        return (
                            <UserCard
                                login={followingUser.login}
                                imageUrl={followingUser.avatar_url}
                                checkUser={() => goToProfile(history, followingUser.login)}
                            />
                        )
                    })}
                </>
            }
        </MainContainer>
    )
}