import axios from 'axios'

export const baseURL = "http://localhost:8000"

function useApi() {
  return axios.create({
    baseURL, 
    headers:{
        Accept: "application/json"
    }
  })
}

export default useApi