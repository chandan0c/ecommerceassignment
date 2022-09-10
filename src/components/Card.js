import { Link } from "react-router-dom"
import { removeProduct } from "./redux/Action"
import { Store } from "./redux/Store"

export const Card=(props)=>{
    const {dispatch}=Store
    const handleDelete=(id)=>{
       dispatch(removeProduct(id))
       window.location.reload()
    }
    return <>

     <h1>{props.data.title}</h1>

     <button>
         <Link to={`/product/${props.data.id}`}> edit</Link>
     </button>

     <button onClick={()=>{handleDelete(props.data.id)}}>
      Delete
     </button>
     <button >
       <Link to={`/product/${props.data.id}`}> Details</Link>
     </button>
    </>
}