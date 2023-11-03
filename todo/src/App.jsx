import { useState } from 'react'
import TodoContext from './context/TodoContext'
import { Route, Routes } from 'react-router-dom'
import TodoForm from '@src-views/Todo/TodoForm'
import TodoList from './views/Todo/TodoList'
import TodoApiContext from './context/TodoApiContext'
import TodoView from './views/Todo/TodoView'
import ErrorPage from './views/ErrorPage'


function App() {
	const [count, setCount] = useState(0)

	return (
		<TodoContext>
			<TodoApiContext>
				<Routes>
					<Route exact path="/" element={<TodoList />} />
					<Route exact path="/todo/:todoID" element={<TodoView />} />
					<Route exact path="/error" element={<ErrorPage />} />
					<Route exact path="/form" element={<TodoForm />} />
				</Routes>
			</TodoApiContext>
		</TodoContext>
	)
}

export default App
