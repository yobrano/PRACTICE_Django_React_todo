import React, {useEffect, useReducer, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useTodo } from '../../context/TodoContext'
import {Box, Container, TextField} from "@mui/material"

export default function TodoForm() {
	const {state} = useLocation()
	const {todoList, emptyTodoItem} = useTodo()
	
	const [todoItem, dispatch] = useReducer(TodoItemReducer, state? emptyTodoItem: todoList[state.todoID])

	const handleSubmit = (event)=>{

		event.preventDefault()
		console.log("submitting...")
	}

	return (
		<Box>

			<Container component= "form" onSubmit={handleSubmit} >
				<TextField 
					label= "Title"
					variant='standard'  
					value={todoItem.label} 
					onChange={
						(event)=>dispatch({update: "label", value: event.target.value})
					} 
					/>

				<TextField 
					label= "Title"
					variant='standard'  
					value={todoItem.label} 
					onChange={
						(event)=>dispatch({update: "label", value: event.target.value})
					} 
					/>
				{/* <TextField variant='standard'  value={todoItem.label} /> */}
			</Container>

		</Box>
	)
}


const TodoItemReducer = (state, action)=>{
	console.log(action)
	switch(action.update)
	{
		case "label":
			return {...state, label: action.value}
			
		case "start":
			return {...state, start: action.value}
		case "end":
			return {...state, end: action.value}
		case "priority":
			return {...state, priority: action.value}
		case "description":
			return {...state, description: action.value}
		case "isComplete":
			return {...state, isComplete: action.value}
		default: 
			throw Error(`unknow field: ${action}`)
	}

}
