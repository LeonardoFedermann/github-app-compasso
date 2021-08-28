import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { useForm } from '../custom hooks/useForm'
import { MainContainer } from '../style/mainContainerStyle'
import { SearchUserContainer, StyledTextField } from '../style/userStyle'
import { UserCard } from '../components/Users/UserCard'
import { UsersListHeader } from '../components/Users/UsersListHeader'
import { BASE_URL } from '../base url/BaseURL'
import { goToProfile } from '../coordinator/Coordinator'
import { Loading } from '../components/Loading/Loading'

export default function FollowerUsersPage() {
    const [followers, setFollowers] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const [renderedUsers, setRenderedUsers] = useState([])
    const [form, setForm, handleValues] = useForm({ searchedUser: '' })
    const history = useHistory()
    const { username } = useParams()

    useEffect(() => {
        getFollowers()
        document.title = `${username}'s followers`
    }, [])

    useEffect(() => {
        setRenderedUsers(followers)
    }, [followers])

    useEffect(() => {
        filterUsers()
    }, [form.searchedUser])

    setTimeout(() => {
        setShowLoading(false)
    }, 5000)

    const getFollowers = async () => {
        try {
            const followers = await axios.get(`${BASE_URL}/${username}/followers`)
            const user = await axios.get(`${BASE_URL}/${username}`)
            setFollowers(followers.data)
            setQuantity(user.data.followers)
        } catch (error) {
            alert('There was an error in the system, but we are already working to solve it. Please try again later')
        }
    }

    const filterUsers = useCallback(() => {
        if (!form.searchedUser) {
            setRenderedUsers(followers)
        } else {
            const newRenderedUsers = followers.filter((user) => {
                return user.login.toUpperCase().includes(form.searchedUser.toUpperCase())
            })
            setRenderedUsers(newRenderedUsers)
        }
    }, [form.searchedUser, followers])

    return (
        <MainContainer>
            <UsersListHeader
                showingPhrase={
                    quantity === 0 ?
                        `No user follows ${username}` :
                        `${quantity} ${quantity === 1 ?
                            'user follows' :
                            'users follow'} 
                    ${username}`
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
            {!followers[0] ?
                showLoading && <Loading /> :
                <>
                    {renderedUsers && renderedUsers.map((follower) => {
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