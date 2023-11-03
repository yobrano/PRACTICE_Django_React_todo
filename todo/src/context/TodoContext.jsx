import dayjs from 'dayjs'
import * as duration from 'dayjs/plugin/duration';

import React, { useContext,  useState } from 'react'

dayjs.extend(duration);

const Context = React.createContext()

function TodoContext({ children }) {
    const [todoList, setTodoList] = useState([])
    const [todoItem , setTodoItem ] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)

    
    const insertItem = (todo)=>{
        const temp = [new TodoItem(todo), ...todoList]
        setTodoList(temp)
        setTodoItem(new TodoItem(todo))        
    }   

    const insertBatch = (batchTodos)=>{
        const temp = batchTodos.map(todoItem=>new TodoItem(todoItem))
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
        emptyTodoItem: new TodoItem({id: "-"}),
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


class TodoItem{
    constructor(todo){
        if(todo.id !== null){
            this.id = todo.id 
            this.label = todo.label 
            this.start = todo.start? dayjs(todo.start) : null 
            this.end = todo.end? dayjs(todo.end) : null
            this.priority = todo.priority 
            this.description = todo.description 
            this.completion = todo.completion 
            this.createdAt = todo.created_at?  dayjs(todo.created_at): null
            this.updatedAt = todo.updated_at ?  dayjs(todo.updated_at): null
            this.isComplete = todo.is_complete 
        }
    }

    duration(){
        if(this.start !== null && this.end !== null )
        {
            const diff= this.end.diff(this.start)
            console.log(diff)
            return dayjs.duration(diff)
        }

        return "-"
    }

    startDateTime = ()=> this.start?{date: this.start.format("DD MMM YYYY"), time: this.start.format("HH:mm")} : "-"
    endDateTime = ()=> this.end?{date: this.end.format("DD MMM YYYY"), time: this.end.format("HH:mm")} : "-"
    
}
export const useTodo = ()=> useContext(Context)
export default TodoContext