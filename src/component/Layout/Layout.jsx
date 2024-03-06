import React, { useContext, useEffect } from 'react'
import Navbar from "../Navbar/Navbar"
import { Outlet } from 'react-router-dom'
import {userToken} from '../Context/tokenContext';


export default function Layout() {
  let {setToken}= useContext(userToken)
  useEffect(() => {
     if(localStorage.getItem("userToken")!== null){
      setToken(localStorage.getItem("userToken"))
    }
    
  } ,[]);
  return (
    <>
    <Navbar/>
    <div>
    <Outlet/>
    </div>
    
    </>
  )
}
