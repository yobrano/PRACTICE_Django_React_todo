import React, { useContext, useEffect, useState } from 'react'


const Context = React.createContext()

function TodoContext({ children }) {
    const [todoList, setTodoList] = useState([])
    const [todoItem , setTodoItem ] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)

    
    const insertItem = (todo)=>{
        const temp = [todo, ...todoList]
        setTodoList(temp)
        setTodoItem(todo)
        
    }   

    const insertBatch = (batchTodos)=>{
        const temp = batchTodos.map(todoItem=>mapTodoItem(todoItem))
        setTodoList(temp)
    }

    const popItem = (idx)=> {
        let temp = [...todoList]
        temp.pop(idx)
        setTodoList([...temp])    
    }

    const replaceItem = (idx, todo)=>{
        let temp = [...todoList]
        temp[idx] = todo
        setTodoList([...temp])
    }

    const focusOnItem = itemID =>{
        setSelectedItem(itemID)
    }

    const methods = {
        insertBatch, insertItem, popItem, focusOnItem, replaceItem
    }

    const data = {
        emptyTodoItem:  mapTodoItem(),
        todoList,
        todoItem,
        selectedItem,
    }

    return (
        <Context.Provider value={{...data, ...methods}}>
            {children}
        </Context.Provider>
    )   
}

const mapTodoItem = todoItem =>
    ({
        id: todoItem? todoItem.id: null,
        label: todoItem ?todoItem.label:  "",
        start: todoItem ?new Date(todoItem.start):  new Date(),
        end: todoItem ?new Date(todoItem.end):  new Date(),
        priority: todoItem ?todoItem.priority:   "MEDIUM",
        description: todoItem ?todoItem.description:   "",
        completion: todoItem ?todoItem.completion:   "PENDING",
        createdAt: todoItem ?new Date(todoItem.created_at):  null,
        updatedAt: todoItem ?new Date(todoItem.updated_at):  null,
        isComplete: todoItem? todoItem.is_complete: false,
    })
    // datejs(todoItem.start)
export const useTodo = ()=> useContext(Context)
export default TodoContext