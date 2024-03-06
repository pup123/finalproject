import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"





export default function Signup() {
  const[isLoading,setLoading]=useState(false)
  const[errorMsg,setError]=useState(null)
  let navigate=useNavigate()
  // let errors={};
  let validationShcema= yup.object({
    name:yup.string().min(3,"min lenght is 3").max(15,"max length is 15").required("name is required"),
    email:yup.string().required("enter your email").email("enter a valid email"),
    phone:yup.string().required('phone is require').matches(/^01[0125][0-9]{8}$/,"enter a valid phone"),
    password:yup.string().required("this password is required").matches(/^[A-Z][a-z0-9]{9}$/,"enter a valid pass"),
    rePassword:yup.string().required("this feild is required").oneOf([yup.ref("password")])
  })
  async function signUp(val){
    setLoading(true)
   let {data}=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",val).catch((err)=>{
    setError(err.response.data.message);
    setLoading(false)
   })
  if(data.message =="success"){
  
    navigate('/login')
    setLoading(false)
  }else{
    console.log(data);
  }
  }

 let formik= useFormik({
  initialValues:{
    name:"",
    phone:"",
    email:"",
    password:"",
    rePassword:""
  },
   
  validationSchema:validationShcema,
  onSubmit:signUp
  
  }
 
 )








  return (
  <div className='my-5'>
  <h1 className='text-main text-center'>Register Form </h1>
  <form onSubmit={formik.handleSubmit} >
    <div className="row ">
      <div className="col-md-8 m-auto shadow text-main p-4 gy-4">
        <div className="row gy-4">
        <div className="col-md-12 ">
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name'  
             value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control'/>
              {formik.errors.name && formik.touched.name ? <p className='text-danger'>{formik.errors.name}</p>  : ''}
              
      </div>
      <div className="col-md-12">
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={formik.values.email} onBlur={formik.handleBlur}  onChange={formik.handleChange} className='form-control'/>
        {formik.errors.email && formik.touched.email ? <p className='text-danger'>{formik.errors.email}</p>  : ''}
      </div>
      <div className="col-md-12">
        <label htmlFor='Phone'>phone</label>
        <input type='tel' id='phone' name='phone' value={formik.values.phone} onBlur={formik.handleBlur}  onChange={formik.handleChange} className='form-control'/>
        {formik.errors.phone && formik.touched.phone ? <p className='text-danger'>{formik.errors.phone}</p>  : ''}
      </div>
      <div className="col-md-12">
        <label htmlFor='userPassword'>password</label>
        <input type='password' id='userPassword' name='password' value={formik.values.password} onBlur={formik.handleBlur}  onChange={formik.handleChange} className='form-control'/>
        {formik.errors.password && formik.touched.password ? <p className='text-danger'>{formik.errors.password}</p>  : ''}
      </div>
      <div className="col-md-12">
        <label htmlFor='userConfirm'>rePassword</label>
        <input type='password' id='userConfirm' name='rePassword' value={formik.values.rePassword} onBlur={formik.handleBlur}  onChange={formik.handleChange} className='form-control'/>
        {formik.errors.rePassword && formik.touched.rePassword ? <p className='text-danger'>{formik.errors.rePassword}</p>  : ''}
      </div>
      <div className="col-md-12 text-end m-2 ">
      {errorMsg !== null? <p className='text-danger'>{errorMsg}</p>  :""}
        <button type='submit' disabled={!(formik.dirty&& formik.isValid)} className='btn bg-main text-light  '>Register
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
