import axios from "axios"
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from "./ActionType"

let InitialValue={
   products:[],
}

export const CommerceReducer=(state=InitialValue,action)=>{
    console.log("dsadsa",action)
    switch(action.type){
        case ADD_PRODUCT:
           return axios.post("http://localhost:8080/products",action.data)

        case REMOVE_PRODUCT:
           return axios.delete(`http://localhost:8080/products/${action.id}`)
        
        case EDIT_PRODUCT:
           return axios.put(`http://localhost:8080/products/${action.id}`,action.payload)
        default:
            return  state
    }
}