import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { userToken } from '../Context/tokenContext'

export default function Login() {
  
  let {setToken}=useContext(userToken)
  const[isLoading,setLoading]=useState(false)
  const[errorMsg,setError]=useState(null)
  let navigate=useNavigate()
  let validationShcema= yup.object({
    email:yup.string().required("enter your email").email("enter a valid email"),
    password:yup.string().required("this password is required").matches(/^[A-Z][a-z0-9]{9}$/,"enter a valid pass"),
  })
  async function signIn(val){
    setLoading(true)
   let {data}=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",val).catch((err)=>{

   setError(err.response.data.message);
   setLoading(false)
   
   })
  if(data.message =="success"){
    localStorage.setItem("userToken",data.token)
     
    navigate('/Home')
    setToken(data.token)
    
    setLoading(false)


  }
  }

 let formik= useFormik({
  initialValues:{
    name:"",
    email:"",
  },
   
  validationSchema:validationShcema,
  onSubmit:signIn
  
  }
 
 )
  return (
  <div className='my-5'>
  <h1 className='text-main text-center'>Login Form </h1>
  <form onSubmit={formik.handleSubmit} >
    <div className="row ">
      <div className="col-md-8 m-auto shadow text-main p-4 gy-4">
        <div className="row gy-4">
      <div className="col-md-12">
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={formik.values.email} onBlur={formik.handleBlur}  onChange={formik.handleChange} className='form-control'/>
        {formik.errors.email && formik.touched.email ? <p className='text-danger'>{formik.errors.email}</p>  : ''}
      </div>
   
      <div className="col-md-12">
        <label htmlFor='userPassword'>password</label>
        <input type='password' id='userPassword' name='password' value={formik.values.password} onBlur={formik.handleBlur}  onChange={formik.handleChange} className='form-control'/>
        {formik.errors.password && formik.touched.password ? <p className='text-danger'>{formik.errors.password}</p>  : ''}
      </div>
     
      <div className="col-md-12 text-end m-2 ">
      {errorMsg !== null? <p className='text-danger'>{errorMsg}</p>  :""}
        <button type='submit' disabled={!(formik.dirty&& formik.isValid)} className='btn bg-main text-light  '>Login
        {isLoading? <span ><i className='fa-solid fa-spinner fa-spin text-light mx-2'></i></span> : "" }
        </button>
      
      </div>
        </div>
      </div>
     
     
    </div>
  </form>
  </div>
  )
}

