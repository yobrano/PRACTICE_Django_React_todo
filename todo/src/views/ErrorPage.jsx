import React from 'react'
import { Button, Paper, Typography, Container } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft } from '@mui/icons-material'


function ErrorPage() {
    const { state } = useLocation()
    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault()
        navigate("/")
    }


    return (
        <Paper elevation={2}>
            <Container sx={{p: 2, m: 4, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Typography variant='h2' color="error">
                    ERROR - {state.status}
                </Typography>

                <Typography >
                    {state.message}
                </Typography>
                <br />
                <Button variant="outlined" color="primary" onClick={handleClick} startIcon={<ChevronLeft />} >
                    List
                </Button>
            </Container>
        </Paper>
    )
}
export default ErrorPage