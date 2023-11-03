import React, { useEffect } from 'react'
import { useTodo } from "@src-context/TodoContext"
import { useTodoApi } from "@src-context/TodoApiContext"
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, Box, Container } from '@mui/material'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutline from '@mui/icons-material/StarOutline';
import Star from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { DoneAll, Edit } from '@mui/icons-material';
import LoadingPage from '../LoadingPage';

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

	const handleEditClick = (todoID) =>{
		navigate("/form", {state: {todoID}})
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
									<Box sx={{ display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
									{todo.isComplete&& 
										<IconButton edge="end" aria-label="comments" >
											 <DoneAll color="success"/>
										</IconButton>
									}
									<Box sx={{margin: "0 1rem"}}></Box>
									<IconButton edge="end" aria-label="comments" onClick={()=>handleEditClick(todo.id)} >
										<Edit color="primary"/>
									</IconButton>

									</Box>
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