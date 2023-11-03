import axios from 'axios'
import {baseURL} from "./endpoints"

function useApi() {
  return axios.create({
    baseURL, 
    headers:{
        Accept: "application/json"
    }
  })
}

export default useApi