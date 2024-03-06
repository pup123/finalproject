// import React from 'react'

import React,{ useContext } from 'react';
import Products from '../Products/Products';
import HomeSlider from '../Slider/Slider';
import Category from '../Category/Category';

export default function Home() {
  
  return (
    <div>
      <HomeSlider/>
   <Category/>
   <Products/>
    </div>
     
  )
}
