import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from "./ActionType"


export const addProduct=(payload)=>{
    console.log("dsadsa",payload)
    return {
        type:ADD_PRODUCT,
        data:payload
    }
}

export const removeProduct=(payload)=>{
    return {
        type:REMOVE_PRODUCT,
        id:payload
    }
}

export const editProduct=(payload)=>{
    return {
        type:EDIT_PRODUCT,
        data:payload.data,
        id:payload.id

    }
}