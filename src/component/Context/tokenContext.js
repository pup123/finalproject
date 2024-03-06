 import { createContext,useState } from "react";

 export let userToken=createContext(null)
 export default function TokenContext(myprops){
    const[utoken,setToken]=useState();

    return <userToken.Provider value={{utoken,setToken}}>  {myprops.children} </userToken.Provider>}