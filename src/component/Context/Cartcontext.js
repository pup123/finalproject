import axios from "axios";
import { createContext, useState } from "react";


export let Cartcontext= createContext()
 export default  function CartContextProvider(props){
    const[cartNum,setCartNum]=useState(0)
  let baseUrl=`https://ecommerce.routemisr.com`
  let header={token: localStorage.getItem("userToken")}
   function addToCart(id){
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
       
        productId: id
    },
    {
       
      
        headers: header
    }
  
    )}
      function getCart(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
            headers: header
        })
    
}
function updateCart(id,count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
       
        count: count
    },
    {
       
      
        headers: header
    }
    )}
    function deleteCart(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
       
        {
           
          
            headers: header
        }
        )}


 return <Cartcontext.Provider value={{addToCart,getCart,cartNum,setCartNum,deleteCart,updateCart}}>
   {props.children}
 </Cartcontext.Provider>
}
