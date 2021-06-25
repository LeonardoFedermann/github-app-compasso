import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingContainer } from '../style/style'

export const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress color="secondary" />
        </LoadingContainer>
    )
}