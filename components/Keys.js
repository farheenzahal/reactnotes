import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const products=[
    {id:1,name:"laptop",brand:"apple",price:2500,qty:1},
    {id:2,name:"laptop",brand:"asus",price:3500,qty:1},
    {id:3,name:"laptop",brand:"dell",price:4500,qty:1},
    {id:4,name:"laptop",brand:"lenovo",price:9500,qty:1},
    {id:5,name:"laptop",brand:"redmi",price:2500,qty:1},

]


const Keys = () => {
    const[item,setItem]=useState(products)
    const changeqty=(id)=>{
        const newitem=item.map((i)=> 
            i.id === id ? {...i, qty : i.qty+1} : i)
            setItem(newitem)
    }
  return (
    <div>
      {item.map((product) =>{
        return(
            <div className='container bg-success text-center mb-5 p-5' key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.brand}</p>
                <p>{product.price}</p>
                <p>{product.qty}</p>
                <button  onClick={()=>changeqty(product.id)}>+</button>
            </div>
        )
      })}
    </div>
  )
}

export default Keys
