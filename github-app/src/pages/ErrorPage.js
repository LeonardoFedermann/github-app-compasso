import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer } from '../style/mainContainerStyle'
import { StyledButton, ErrorContainer } from '../style/errorPageStyle'
import { goToSearchPage } from '../coordinator/Coordinator'
import { githubLogo } from '../images/images'

export default function ErrorPage() {
    const history = useHistory()

    useEffect(() => {
        document.title = `Page was not found`
    }, [])

    return (
        <MainContainer>
            <ErrorContainer>
                <img alt="GitHub Logo" src={githubLogo} />
                <h1>Ops! There is nothing here!</h1>
                <p>
                    It looks like this link does not exist.
                    However, you may still go to our homepage.
                    There you will find all the information you need.
                </p>
                <StyledButton
                    color="secondary"
                    variant="contained"
                    onClick={() => goToSearchPage(history)}
                >
                    Homepage
                </StyledButton>
            </ErrorContainer>
        </MainContainer>
    )
}