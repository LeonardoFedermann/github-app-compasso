import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { useForm } from '../custom hooks/useForm'
import { MainContainer } from '../style/mainContainerStyle'
import { SearchUserContainer, StyledTextField } from '../style/userStyle'
import { UserCard } from '../components/Users/UserCard'
import { goToProfile } from '../coordinator/Coordinator'
import { UsersListHeader } from '../components/Users/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { Loading } from '../components/Loading/Loading'

export default function FollowingUsersPage() {
    const [followingUsers, setFollowingUsers] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const [renderedUsers, setRenderedUsers] = useState([])
    const [form, setForm, handleValues] = useForm({ searchedUser: '' })
    const history = useHistory()
    const { username } = useParams()

    useEffect(() => {
        getFollowingUsers()
        document.title = `Who ${username} follows`
    }, [])

    useEffect(() => {
        setRenderedUsers(followingUsers)
    }, [followingUsers])

    useEffect(() => {
        filterUsers()
    }, [form.searchedUser])

    setTimeout(() => {
        setShowLoading(false)
    }, 5000)

    const getFollowingUsers = async () => {
        try {
            const followingUsers = await axios.get(`${BASE_URL}/${username}/following`)
            const user = await axios.get(`${BASE_URL}/${username}`)
            setFollowingUsers(followingUsers.data)
            setQuantity(user.data.following)
        } catch (error) {
            alert('There was an error in the system, but we are already working to solve it. Please try again later')
        }
    }

    const filterUsers = useCallback(() => {
        if (!form.searchedUser) {
            setRenderedUsers(followingUsers)
        } else {
            const newRenderedUsers = followingUsers.filter((user) => {
                return user.login.toUpperCase().includes(form.searchedUser.toUpperCase())
            })
            setRenderedUsers(newRenderedUsers)
        }
    }, [form.searchedUser, followingUsers])

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={
                    quantity === 0 ?
                        `${username} does not follow anyone` :
                        `${username} follows ${quantity} 
                    ${quantity === 1 ?
                            'user' :
                            'users'
                        }`
                }
            />
            <SearchUserContainer>
                <StyledTextField
                    type="text"
                    value={form.searchedUser}
                    name="searchedUser"
                    onChange={handleValues}
                    label="Search user"
                    color="secondary"
                    variant="filled"
                />
            </SearchUserContainer>
            {!followingUsers[0] ?
                showLoading && <Loading /> :
                <>
                    {renderedUsers && renderedUsers.map((followingUser) => {
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