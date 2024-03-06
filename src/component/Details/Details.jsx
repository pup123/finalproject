import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cartcontext } from '../Context/Cartcontext'
import { toast } from 'react-toastify'

export default function Details() {
  
  const [productDetails,setProduct]=useState(null)
let {addToCart,setCartNum}= useContext(Cartcontext)
  let x=useParams()
  let productId=x.id
 
  async function getSpecificProduct(){
   let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
    setProduct(data.data)
    console.log(data.data);
  }
  async function addToMyCart(id){
    let {data}= await addToCart(id)
    if(data.status==="success"){
      toast(data.message);
      setCartNum(data.numOfCartItems)
    }
    console.log(data);
    
  }
  useEffect(()=>{
    getSpecificProduct()
  },[])
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={productDetails?.imageCover} alt="cover"  className='w-100'/>
        </div>
        <div className='col-md-9 d-flex flex-column justify-content-around'>
          <div>
         <h2>{productDetails?.title}</h2>
         <p>{productDetails?.description}</p>
          </div>
          <div>
           <p>{productDetails?.category.name}</p>
           <div className='d-flex justify-content-between'>
           <p><span className='text-main '>Price : </span>{productDetails?.price}</p>
           <p><span>{productDetails?.ratingsAverage}<i className='fa-solid fa-star rating-color'></i></span></p>
           </div>
          
           <button onClick={()=>{addToMyCart(productDetails._id)}} className='btn bg-main text-light w-100' >Add To Cart</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
