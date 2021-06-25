import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer } from '../style/style'
import { StarredReposHeader } from '../components/StarredReposHeader'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../base url/BaseURL'
import { RepoCard } from '../components/RepoCard'
import { Loading } from '../components/Loading'
import { goBack } from '../coordinator/Coordinator'

export default function StarredPage() {
    const [starred, setStarred] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    // const [alertWasShown, setAlertWasShown] = useState(false)
    const { username } = useParams()
    const history = useHistory()

    useEffect(() => {
        getStarred()
    }, [])

    setTimeout(()=>{
        setShowLoading(false)
    }, 5000)

    const getStarred = async () => {
        try {
            const starredRepos = await axios.get(`${BASE_URL}/users/${username}/starred`)
            setStarred(starredRepos.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <StarredReposHeader
                starredRepos={starred && starred.length}
                username={username}
            />
            {!starred[0] ?
                showLoading && <Loading /> :
                <>
                    {starred && starred.map((starredRepo) => {
                        return (
                            <RepoCard
                                name={starredRepo.name}
                                description={starredRepo.description}
                                stargazers={starredRepo.stargazers_count}
                            />
                        )
                    })}
                </>
            }
        </MainContainer>
    )
}