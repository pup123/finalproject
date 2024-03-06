import React from 'react'
import Slider from 'react-slick'
import img from "../../assets/grocery-banner.png"
import img1 from "../../assets/slider-image-3.jpeg"
import img2 from "../../assets/grocery-banner-2.jpeg"
import img3 from "../../assets/slider-image-1.jpeg"
import img4 from "../../assets/slider-image-2.jpeg"

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='row g-0'>
      <div className='col-md-8'>
      <Slider {...settings}>
      <img src={img1} className='w-100' height={500} alt='imageSlider' />
      <img src={img3} className='w-100' height={500} alt='imageSlider' />
      <img src={img4} className='w-100' height={500} alt='imageSlider' />
      
      </Slider>
      </div>
      <div className='col-md-4'>
       <img src={img} className='w-100' height={250} alt='imageSlider' />
       <img src={img2} className='w-100' height={250} alt='imageSlider' />
      
      </div>
      
    </div>
  )
}
