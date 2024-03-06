import React, { useContext ,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { userToken } from '../Context/tokenContext'
import { Cartcontext } from '../Context/Cartcontext'

export default function Navbar() {
   let{cartNum,getCart,setCartNum}= useContext(Cartcontext)
  let{utoken,setToken}=useContext(userToken)

   let navigate= useNavigate()
   function logOut(){
    localStorage.removeItem("userToken")
    setToken(null);
    navigate("./login")
   }
   useEffect(()=>{
    (async()=>{
   let {data} =  await getCart()
   setCartNum(data.numOfCartItems)
    })()

  },[])
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-main text-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <i className="fa-solid fa-cart-shopping text-light"></i><span className='fw-bold text-light'>FreshCart</span>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      { utoken !==null ? 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="products">products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="category">categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="brands">Brands</Link>
        </li>
        </ul> : "" }

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {utoken == null ?
         <>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="signup">sign up</Link>
        </li>
        <li  className="nav-item">
          <Link  className="nav-link active text-light" aria-current="page" to="login">login</Link>
        </li> </> :""
        }

        {utoken !== null ?
         <>
          <li className="nav-item d-flex align-items-center">
                  <i className='fa-brands fa-facebook mx-3'></i>
                  <i className='fa-brands fa-twitter mx-3'></i>
                  <i className='fa-brands fa-instagram mx-3'></i>
                  <i className='fa-brands fa-linkedin mx-3'></i>
                  <li className='nav-item' >
              <Link className="nav-link" to="cart">
                <i className='fa-solid fa-shopping-cart text-light' ></i>
                <span className='text-light bg-main m-2'>{cartNum}</span>
              </Link>
            </li>
                  <li onClick={()=>{logOut()}} className='nav-item'>
                    <Link className='nav-link text-light'>logout</Link>
                  </li>
                  </li> 

         </> :""
      } 
    </ul>
      </div>
      </div>
      </nav>
      </>
      )}
      
              