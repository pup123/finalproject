import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../Context/Cartcontext'

export default function Cart() {
  const[data,setData]=useState([])
  const [cartPrice,setPrice]=useState()
  
  let {getCart,deleteCart,updateCart,cartNum,setCartNum}=useContext(Cartcontext)
  useEffect(()=>{
    (async()=>{
   let {data} =  await getCart()
   setData(data.data.products)
   setPrice(data.data.totalCartPrice)
  //  console.log(data);
    })()

  },[])
 async function removeProduct(id){
 
 let data= await deleteCart(id)
 setData(data.data.data.products)
 setPrice(data.data.data.totalCartPrice)
 setCartNum(data.data.numOfCartItems)
  }
  async function updateProduct(id,count){
      let data= await updateCart(id,count)
      
      setData(data.data.data.products)
      setPrice(data.data.data.totalCartPrice)
      setCartNum(data.data.numOfCartItems)
      
    }
  return (
    <div className='container'>
      <div className='row '>
        <h1 className='text-main text-center fw-bold'>Shopping Cart</h1>
        <div className="col-md-11 bg-main-light shadow p-5 m-auto my-5 ">
          <h4 className='fw-bold'><span className='text-main'>Total price : </span>{cartPrice}</h4>
          {data.map((product)=>{
            return(< div className='row border-bottom py-5'>
            <div className='col-md-1 '>
            <img src={product.product.imageCover} className='w-100'/>
            </div>
            <div className="d-flex justify-content-between col-md-11 alighn-items-center">
              <div>
                <h5>
                {product?.product.title}
                </h5>
                <p>{product.price} EGP</p>
                <button onClick={()=>{removeProduct(product.product._id)}} className='btn btn-outline-danger'><i className='fa-regular fa-trash-can'></i> Remove</button>
              </div>
              <div >

          <button onClick={()=>{updateProduct(product.product._id,(++product.count))}} className='btn btn-outline-success'> +</button>
              <span className='mx-2' >{product.count}</span>
            <button onClick={()=>{updateProduct(product.product._id,(--product.count))}} className='btn btn-outline-danger'> - </button> 
              </div>
            </div>
            </div> 
            )
           
          })}
        </div>
      </div>
       
    </div>
  )
}
