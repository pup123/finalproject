import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'


export default function Category() {
  const[categoryList,setCategory]=useState([])
  async function getCategory(){
    let {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    setCategory(data.data)
  }
  useEffect(()=>{
     getCategory()
  },[])
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (

    <div>
    <h2 className='text-main text-center text' >Swipe For More</h2>
<Slider {...settings}>
     {
      categoryList.map((product)=>{
        return<>
         <img className='w-100 'height={300} src={product.image}/>
        <p className='text-main text-center' >{product.name}</p>
        </>
      })
     }
    </Slider>
  
    </div>
  )
}
