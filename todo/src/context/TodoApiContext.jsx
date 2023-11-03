import React, { useContext, useEffect } from 'react'
import { useTodo } from './TodoContext'
import { endpoints } from '@src-utils/endpoints'
import useApi from '@src-utils/useApi'
import _ from "lodash"
import { useNavigate } from 'react-router-dom'



const Context = React.createContext()

function TodoApiContext({children}) {
    
    const navigate = useNavigate()

    const {insertItem, insertBatch, replaceItem, popItem, todoList} = useTodo()
    const api = useApi()
    
    // --------------------- METHODS --------------------- 
    const createItem = ()=> null

    const getItem = (todoID) => {
        const endpoint = endpoints.getTodoUrl(todoID)
        api.get(endpoint)
        .then((response)=>{
            insertItem(response.data)
        })
        .catch((error)=>{
            // if error is 404 - navigate to list. 
            console.log("Error caught")
            if(error.response.status === 404){
                navigate("/error", {state: { 
                    status: 404,
                    message: "Shit just hit the fan 💩",
                }})
            }else{
                navigate("/error", {state: {
                    status: error.response.status, 
                    message: "Something is wrong. I click the button 👇 & NOTE:: This might not resolve anything. See you soon. "
                }})
            }
            console.log(error)
        })
    }

    const refreshItem = (todoID) => {
        const endpoint = endpoints.getTodoUrl(todoID)
        api.get(endpoint)
        .then((response)=>{
            replaceItem(todoID, response.data)
        })
        .catch(error=> {
            navigate("/error", {state: {status: error.response.status, message: "Something is wrong. I click the button 👇 below. NOTE:: This might not resolve anything."}})
        })
    }

    const getRange = ()=> {
        const endpoint = endpoints.getTodoRangeUrl()
        api.get(endpoint)
        .then(response=>{
            insertBatch(response.data)
        })
    }
    const updateItem = ()=> null
    
    const deleteItem = ()=> null

    // --------------------- CONTEXT VALUE --------------------- 
    const methods = {refreshItem, getRange, getItem}
    const data = {}

    return (
        <Context.Provider value={{ ...methods, ...data }} >
            {children}
        </Context.Provider>
    )
}

export const useTodoApi = ()=> useContext(Context)
export default TodoApiContext