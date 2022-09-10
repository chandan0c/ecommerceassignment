//http://localhost:3000/products
import axios from "axios"
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { ProductCreation } from "./ProductCreation";
const Homepage=()=>{

    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/products")
        .then((res)=>setData(res.data))

    },[])
   
    return(
        <>
        <div>
            {data.map(e=>{
                return <Card data={e}/>
            })}


            
        </div>
        </>
    )
}
export default Homepage;