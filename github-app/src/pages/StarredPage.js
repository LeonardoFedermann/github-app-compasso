import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useForm } from '../custom hooks/useForm'
import { MainContainer } from '../style/mainContainerStyle'
import { StyledTextField, SearchRepoContainer } from '../style/repoStyle'
import { ReposHeader } from '../components/Repos/ReposHeader'
import { BASE_URL } from '../base url/BaseURL'
import { RepoCard } from '../components/Repos/RepoCard'
import { Loading } from '../components/Loading/Loading'

export default function StarredPage() {
    const [starred, setStarred] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const [renderedStarredRepos, setRenderedStarredRepos] = useState([])
    const [form, setForm, handleValues] = useForm({ searchedStarredRepo: '' })
    const { username } = useParams()

    useEffect(() => {
        getStarred()
        document.title = `${username}'s starred repos`
    }, [])

    useEffect(() => {
        setRenderedStarredRepos(starred)
    }, [starred])

    useEffect(() => {
        filterStarredRepos()
    }, [form.searchedStarredRepo])

    setTimeout(() => {
        setShowLoading(false)
    }, 5000)

    const getStarred = async () => {
        try {
            const starredRepos = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starredRepos.data)
        } catch (error) {
            alert('There was an error in the system, but we are already working to solve it. Please try again later')
        }
    }

    const filterStarredRepos = useCallback(() => {
        if (!form.searchedStarredRepo) {
            setRenderedStarredRepos(starred)
        } else {
            const newRenderedRepos = starred.filter((repo) => {
                return repo.name.toUpperCase().includes(form.searchedStarredRepo.toUpperCase())
            })
            setRenderedStarredRepos(newRenderedRepos)
        }
    }, [form.searchedStarredRepo, starred])

    return (
        <MainContainer>
            <ReposHeader
                showingPhrase={
                    starred.length === 0 ?
                        `${username} has no starred repos` :
                        `${username} has ${starred.length} ${starred.length === 1 ?
                            'starred repo' :
                            'starred repos'}`
                }
            />
            <SearchRepoContainer>
                <StyledTextField
                    type="text"
                    value={form.searchedStarredRepo}
                    name="searchedStarredRepo"
                    onChange={handleValues}
                    label="Search starred repo"
                    color="secondary"
                    variant="filled"
                />
            </SearchRepoContainer>
            {!starred[0] ?
                showLoading && <Loading /> :
                <>
                    {renderedStarredRepos && renderedStarredRepos.map((starredRepo) => {
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