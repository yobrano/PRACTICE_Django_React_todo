import React, { useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTodoApi } from '../context/TodoApiContext'
import { useTodo } from '../context/TodoContext'
import LoadingPage from './LoadingPage'
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


    const formatDate = dateObj => moment(dateObj)
        .format('MMMM Do YYYY hh:mm a')

    const dateDifference = (start, end) => {
        const durationInMilliseconds = new Date(end) - new Date(start);
        const seconds = durationInMilliseconds / 1000
        const minutes = seconds / 60
        const hours = minutes / 60
        const days = hours / 24
        const weeks = days / 7
        const months = weeks / 4
        const years = months / 12
        return { seconds, minutes, hours, days, weeks, months, years }
    }

    const getDuration = (start, end) => {

        const {years} = dateDifference(start, end)
        const remainingYears = years % 1
        const fullYears = years - remainingYears
        
        const months = remainingYears * 12
        const remainingMonths = months % 1
        const fullMonths = months - remainingMonths
        
        const weeks = remainingMonths * 4
        const remainingWeeks = weeks % 1
        const fullWeeks = weeks - remainingWeeks

        const days = remainingWeeks * 7
        const remainingDays = days % 1
        const fullDays = days - remainingDays

        const hours = remainingDays * 24 
        const remainingHours = hours % 1
        const fullHours = hours - remainingHours

        const minutes = remainingHours * 60
        const remainingMinutes = minutes % 1
        const fullMinutes = minutes - remainingMinutes

        const seconds = Math.floor(remainingMinutes * 60)

        return {years: fullYears, months: fullMonths, weeks: fullWeeks, days: fullDays, hours: fullHours, minutes: fullMinutes, seconds}
    }

    const getDurationString = (start, end) =>{
        const {  minutes, hours, days, weeks, months, years } = getDuration(start, end)
        const durationValues = [ minutes, hours, days, weeks, months, years].reverse()
        const names = ["minute", "hour", "day", "week", "month", "year"].reverse()

        const durationStrings = _.zipWith(durationValues, names, 
            (value, name)=>{if(value !== 0 ){ return `${value} ${name}${value > 1? "s": ""}`} })
        .filter((duration)=> duration !== undefined   )
        
        return durationStrings.join(", ")
    }
   
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
                                    <Typography>{formatDate(todoItem.start)}</Typography>
                                </div>

                                <div>
                                    <Button color="primary" >Remaining</Button>
                                    <Typography>{getDurationString(new Date().toString(), todoItem.end)}</Typography>
                                </div>

                                <div>
                                    <Button endIcon={<Alarm color="error" />} color="error" >end</Button>
                                    <Typography>{formatDate(todoItem.end)}</Typography>
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