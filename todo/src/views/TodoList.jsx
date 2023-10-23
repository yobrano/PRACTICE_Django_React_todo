import React, { useEffect } from 'react'
import { useTodo } from "@src-context/TodoContext"
import { useTodoApi } from "@src-context/TodoApiContext"
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Container } from '@mui/material'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutline from '@mui/icons-material/StarOutline';
import Star from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { DoneAll } from '@mui/icons-material';
import LoadingPage from './LoadingPage';

function TodoList() {
	const { todoList } = useTodo()
	const {getRange } = useTodoApi()
	const navigate = useNavigate()
	useEffect(()=>{
		getRange()
	}, [])
	const priorityIcon = priority =>{
		switch(priority)
		{
			case "low":
				return <StarOutline color="success" />
			case "medium":
				return <StarHalfIcon color="primary" />
			case "high":
				return <Star color="error" />
			default:
				return <StarHalfIcon color="primary" />
		}	 
			
	}

	const handleItemClick = (todoID)=>{
		navigate(`/todo/${todoID}`)
	}

	return (
		<Container>
			{todoList ?
			<>
				<Typography variant='h3'> Todo List </Typography>
				<List> 
					{todoList.map((todo, idx) =>
						<React.Fragment key={idx}>
							<ListItem
								secondaryAction={	
									<IconButton edge="end" aria-label="comments" >
										{todo.isComplete? <DoneAll color="success"/> : ""}
									</IconButton>
								}
								disablePadding
							>
								<ListItemButton onClick={() => handleItemClick(todo.id)} >
									<ListItemIcon >
										{priorityIcon(todo.priority)}
									</ListItemIcon>
									<ListItemText  primary={todo.label} style={{ textDecoration: todo.isComplete ? "line-through" : "none" }} />
								</ListItemButton>
							</ListItem  >
							<Divider />
						</React.Fragment>
					)}
				</List>
			</>
				: <LoadingPage/> }
		</Container>
	)
}

export default TodoList