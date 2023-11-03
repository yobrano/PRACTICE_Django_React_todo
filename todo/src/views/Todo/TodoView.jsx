import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTodoApi } from '../../context/TodoApiContext'
import { useTodo } from '../../context/TodoContext'
import LoadingPage from '../LoadingPage'
import { Container, Divider, Paper, Typography, Box, Button, IconButton } from '@mui/material'
import { Alarm, ArrowBack } from '@mui/icons-material'
import moment from 'moment'
import _ from 'lodash'

function TodoView() {
    const { todoID } = useParams()
    const { getItem } = useTodoApi()
    const { todoItem } = useTodo()
    const navigate = useNavigate()

    useEffect(() => {
        getItem(todoID)
    }, [])

    useEffect(()=>{
    }, [todoItem])


    
   
    return (
        <>
            {todoItem ?
                <>
                    <Container sx={{ mt: 3 }} >
                        <Paper elevation={2} sx={{ p: 3 }}>
                            <IconButton sx={{mb: 2}} onClick={()=> navigate("..")}>
                                <ArrowBack />
                            </IconButton>
                            <Typography variant="h3" >
                                {todoItem.label}
                            </Typography>
                            <Typography  >
                                {todoItem.description}
                            </Typography>
                            <Divider sx={{ mt: 2, mb: 2 }} />
                            <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                                <div>
                                    <Button startIcon={<Alarm color="success" />} color="success" >start</Button>
                                    <Typography>{todoItem.startDateTime().time}, {todoItem.startDateTime().date}</Typography>
                                </div>

                                <div>
                                    <Button color="primary" >Duration</Button>
                                    {console.log(todoItem.duration().humanize)}
                                    {/* <Typography>{todoItem.duration()}</Typography> */}
                                </div>

                                <div>
                                    <Button endIcon={<Alarm color="error" />} color="error" >end</Button>
                                    <Typography>{todoItem.endDateTime().time}, {todoItem.endDateTime().date}</Typography>
                                </div>
                            </Box>
                        </Paper>

                    </Container>
                </>
                :
                <LoadingPage />}
        </>
    )
}

export default TodoView