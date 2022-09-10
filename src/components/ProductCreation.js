import { useState } from "react"
import { addProduct } from "./redux/Action"
import { Store } from "./redux/Store"

export const ProductCreation=()=>{
  const [data,setData]=useState({})
  const {dispatch}= Store
  const handleAdd=()=>{
    console.log("Dsadas",data)
     dispatch(addProduct(data))
  }

  const hadleOnChange=(e)=>{
     data[`${e.target.name}`]=e.target.value;
     setData(data)
  }
    return <>
      brand<input name="brand" onChange={(e)=>hadleOnChange(e)}></input>
      <br></br>
     title<input onChange={(e)=>hadleOnChange(e)} name="title" placeholder="enter brand name"/>
     <br></br>
     image url<input onChange={(e)=>hadleOnChange(e)}  name="image" placeholder="enter brand name"/>
     <br></br>
     category<input onChange={(e)=>hadleOnChange(e)} name="category" placeholder="enter brand name"/>
     <br></br>
     price<input onChange={(e)=>hadleOnChange(e)} name="price" placeholder="enter brand name"/>
   <br></br>
      <button onChange={(e)=>hadleOnChange(e)} onClick={()=>handleAdd()}>Add</button>
      
    </>
}

/*"brand": "Park Avenue",
      "title": "Men Linen Regular Fit",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2164551/2019/3/12/45950906-09a8-4e72-9717-16448ce161a41552375230864-Roadster-Men-Grey--Olive-Green-Camouflage-Print-Regular-Fit--1.jpg",
      "category": "men",
      "price": 799*/