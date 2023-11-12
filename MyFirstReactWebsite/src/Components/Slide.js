import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import'../css/Hamburger.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../css/Slide.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger/Hamburger';

const SlideShow=()=>{
  const API_KEY = 't76atBvIlKcpxah7bmMQM5aJNH5s0XNHTgZDfCQTgtiD4luGAvnacUD0';
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('https://api.pexels.com/v1/search?query=food&per_page=12&page=1',{
      headers:{
        Authorization: API_KEY
      }
    }).then(
      res=>{
        setProducts(res.data.photos)
        console.log(res);
      }
    )
  },[])

  return(
    <>
       <Swiper
            spaceBetween={30}
         centeredSlides={true}
        autoplay={{
       delay: 4500,
         disableOnInteraction: false,
       }}
     pagination={{
         clickable: true,
             }}
             navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
           >
           {
            products.map(product => {
              return (
                <SwiperSlide key={product.id}>
                             <div key={product.id} className="each-slide-effect">
                               <div style={{ 'backgroundImage': `url(${product.src.large})` }}>
                                  <h2 >Welcome to</h2>
                                 <h1>YAto Place</h1>
                                 <Link id="Menu" to="/Menu">Menu</Link>
                               </div>
                             </div>
      
                </SwiperSlide>
              )
            }
            )
           }
          </Swiper>
          <div className='container-hamburger'>
            <Hamburger />
    
           </div>
       
         </>
  )
}

export default SlideShow;