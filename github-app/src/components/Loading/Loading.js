import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingContainer } from '../../style/loadingStyle'

export const Loading = () => {
    return (
        <LoadingContainer
            role="loading symbol"
        >
            <CircularProgress color="secondary" />
        </LoadingContainer>
    )
}