import axios from "axios"
import { useEffect, useState } from "react"

export const ProductDetails=()=>{
    const [data,setData]=useState({})
    useEffect(()=>{
     let pathName=window.location.pathname;
     let id=pathName.split("/")[2]
     console.log(id)
    axios.get(`http://localhost:8080/Products/${id}`).then(res=>{
    setData(res.data)
      })
    },[])

    return <>
       <div>
        <img src={data.image} alt="product-image"></img>
        <h1>{data.brand}</h1>
        <h2>{data.title}</h2>
        <h3>{data.category}</h3>
        <h4>{data.price}</h4>
       </div>
    </>
}

