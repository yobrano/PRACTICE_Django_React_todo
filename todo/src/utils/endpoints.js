export const baseURL = "http://localhost:8000"

export const endpoints = {
    getTodoRangeUrl: ()=>baseURL + "/todo/all-todo/",
    getTodoUrl: todoId => baseURL + `/todo/detailed-todo/${todoId}/`
}








/*
/////  DONT WASTE TIME ON THIS. ////////
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

*/ 