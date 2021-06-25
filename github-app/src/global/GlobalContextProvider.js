import { useState } from 'react'
import { GlobalContext } from './GlobalContext'

export const GlobalContextProvider = (props) => {
    const [repos, setRepos] = useState([])
    const [followers, setFollowers] = useState([])
    const [followingUsers, setFollowingUsers] = useState([])

    const data = {
        repos,
        followers,
        followingUsers,
        setRepos,
        setFollowers,
        setFollowingUsers
    }
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}