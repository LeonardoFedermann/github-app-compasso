import React, { useEffect, useState } from 'react'
import { MainContainer } from '../style/style'
import { ReposHeader } from '../components/ReposHeader'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../base url/BaseURL'
import { RepoCard } from '../components/RepoCard'
import { Loading } from '../components/Loading'

export default function ReposPage() {
    const [repos, setRepos] = useState([])
    const { username } = useParams()
    const [quantity, setQuantity] = useState(0)
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        getRepos()
    }, [])

    setTimeout(()=>{
        setShowLoading(false)
    }, 5000)

    const getRepos = async () => {
        try {
            const repos = await axios.get(`${BASE_URL}/users/${username}/repos`)
            const user = await axios.get(`${BASE_URL}/users/${username}`)
            setQuantity(user.data.public_repos)
            setRepos(repos.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <ReposHeader
                publicRepos={quantity}
                username={username}
            />
            {!repos[0] ?
            showLoading && <Loading /> :
                <>
                    {repos && repos.map((repo) => {
                        return (
                            <RepoCard
                                name={repo.name}
                                description={repo.description}
                                stargazers={repo.stargazers_count}
                            />
                        )
                    })}
                </>
            }
        </MainContainer>
    )
}