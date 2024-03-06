import axios from 'axios'
import React, { useEffect } from 'react'
import { Circles } from 'react-loader-spinner'
import { useQuery } from 'react-query'


export default function Brands() {
  async function getBrands(){
    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
  let {data,isFetching,isLoading}=useQuery("brand", getBrands)
  console.log(data?.data.data);

  return (
    <div className='row'>
      {!isLoading?
      <>
       {data?.data.data.map((brand)=>{
        return <div className='col-md-3'>
          <img src={brand.image} alt="" />
          <p>{brand.name}  </p>
        </div>
    
      })
      
      }
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
    
    
  
