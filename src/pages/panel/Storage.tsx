import { Alert, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import Snackbar from '@mui/material/Snackbar'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const warningThreshold = 0.85
const errorThreshold = 1

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: '5px',
    borderRadius: '5px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: '5px',
        backgroundColor: 'primary.main',
    },
}))

const Storage = () => {
    const [usage, setUsage] = React.useState<any>(null)

    // Update usage every time the search params change if the storage route is active
    const [searchParams] = useSearchParams()
    React.useEffect(() => {
        console.log('Updating usage')
        setUsage(Math.random()*0.5+0.5)
    }, [searchParams])

    return (
        <>
            <Typography variant='h6' sx={{ pb: 1 }}>Storage Usage</Typography>
            <Typography variant='h4' sx={{ pb: 2 }}>{Math.floor(usage * 100) + ' %'}</Typography>
            <StyledLinearProgress variant='determinate' value={usage * 100} sx={{
                [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: usage >= errorThreshold
                        ? 'error.main'
                        : usage >= warningThreshold
                            ? 'warning.main'
                            : 'primary.main'
                }
            }} />
            {
                usage >= errorThreshold
                    ? <Alert severity='error' sx={{ mt: 2 }}>You are out of storage space!</Alert>
                    : usage >= warningThreshold
                        ? <Alert severity='warning' sx={{ mt: 2 }}>You are running low on storage space!</Alert>
                        : null
            }
        </>
    )
}

export default Storage