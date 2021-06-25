import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { SearchContainer, SearchForm, StyledTextField, StyledButton } from '../style/style'
import { githubLogo } from '../images/images'
import { useForm } from '../custom hooks/useForm'
import { BASE_URL } from '../base url/BaseURL'
import { goToFirstProfile } from '../coordinator/Coordinator'

export default function SearchPage() {
    const [user, setUser] = useState({})
    const [form, setForm, handleValues] = useForm({ username: "" })
    const history = useHistory()

    const searchUser = async (e) => {
        e.preventDefault()
        try {
            const user = await axios.get(`${BASE_URL}/users/${form.username}`)
            setUser(user.data)
            goToFirstProfile(history, form.username)
        } catch (error) {
            if (error.response.data.message === "Not Found") {
                alert("Usuário não encontrado")
            } else {
                alert(error.response.data.message)
            }
        }
    }

    return (
        <SearchContainer>
            <img alt="GitHub Logo" src={githubLogo} />
            <SearchForm onSubmit={searchUser}>
                <StyledTextField
                    required
                    type="text"
                    label="Usuário"
                    color="black"
                    variant="filled"
                    onChange={handleValues}
                    name="username"
                    value={form.username}
                />
                <StyledButton
                    color="secondary"
                    variant="contained"
                    onClick={searchUser}
                >
                    Buscar usuário
                </StyledButton>
            </SearchForm>
        </SearchContainer>
    )
}