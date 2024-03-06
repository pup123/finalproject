import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Circles, LineWave } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../Context/Cartcontext';
import { toast } from 'react-toastify';




export default function Products() { 
let{addToCart,setCartNum}= useContext(Cartcontext)
  const[productList,setProduct]=useState([])

async function getProduct(){
  let {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/products");  

    setProduct(data.data)
}

async function addToMyCart(id){
  let {data}=await addToCart(id)
    if(data.status==="success"){
      toast(data.message);
    }
    
    console.log(data);
    setCartNum(data.numOfCartItems)
}

useEffect(()=>{
getProduct()
},[])

  return (
    <div className='row'>
      
      {productList.length>0 ?
      <>
      {productList.map((pro)=>{
        return <div className='col-md-3 ' key={pro._id}>
          <div className='product p-5'>
          <Link to={`/details/${pro._id}`}>
           
          <img src={pro.imageCover} className='w-100' alt={pro.title} />
            <p className='text-main'>{pro.category.name}</p>
            <h6>{pro.title}</h6>
            <div className='d-flex justify-content-between'>
              <p>{pro.price} EGP </p> 
              <p className='fa-solid fa-star rating-color'>{pro.ratingsAverage}</p>
            </div>
          </Link>
            <button onClick={()=>{addToMyCart(pro._id)}} className='btn bg-main text-light w-100'>Add to Cart</button>
            </div>
            </div>
      })}
      </>
      :
      <div className='vh-100 justify-content-center d-flex align-items-center'>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </div>
      }
    
    </div>
    
  )
}
  
 
