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

export default function ReposPage() {
    const [repos, setRepos] = useState([])
    const [renderedRepos, setRenderedRepos] = useState([])
    const [form, setForm, handleValues] = useForm({ searchedRepo: '' })
    const { username } = useParams()
    const [quantity, setQuantity] = useState(0)
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        getRepos()
        document.title = `${username}'s repos`
    }, [])

    useEffect(() => {
        setRenderedRepos(repos)
    }, [repos])

    useEffect(() => {
        filterRepos()
    }, [form.searchedRepo])

    setTimeout(() => {
        setShowLoading(false)
    }, 5000)

    const getRepos = async () => {
        try {
            const repos = await axios.get(`${BASE_URL}/${username}/repos`)
            const user = await axios.get(`${BASE_URL}/${username}`)
            setQuantity(user.data.public_repos)
            setRepos(repos.data)
        } catch (error) {
            alert('There was an error in the system, but we are already working to solve it. Please try again later')
        }
    }

    const filterRepos = useCallback(() => {
        if (!form.searchedRepo) {
            setRenderedRepos(repos)
        } else {
            const newRenderedRepos = repos.filter((repo) => {
                return repo.name.toUpperCase().includes(form.searchedRepo.toUpperCase())
            })
            setRenderedRepos(newRenderedRepos)
        }
    }, [form.searchedRepo, repos])

    return (
        <MainContainer>
            <ReposHeader
                showingPhrase={
                    quantity === 0 ?
                        `${username} has no repos` :
                        `${username} has ${quantity} ${quantity === 1 ?
                            'repo' :
                            'repos'}`
                }
            />
            <SearchRepoContainer>
                <StyledTextField
                    type="text"
                    value={form.searchedRepo}
                    name="searchedRepo"
                    onChange={handleValues}
                    label="Search repo"
                    color="secondary"
                    variant="filled"
                />
            </SearchRepoContainer>
            {!repos[0] ?
                showLoading && <Loading /> :
                <>
                    {renderedRepos && renderedRepos.map((repo) => {
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