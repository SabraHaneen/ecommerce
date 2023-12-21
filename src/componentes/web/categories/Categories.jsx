import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './Categories.css';
import { Link } from 'react-router-dom';
//import React, { useEffect, useState } from 'react'

export default function Categories() {
  //console.log(import.meta.env.VITE_API_URL);
/*

  const[categories,setCategories]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const getCategories= async()=>{
   try{
    const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    // console.log(data);
 setCategories(data.categories);
   }catch(errror) {
    console.log(error);
   }
   finally{
    setIsLoading(false);
   }
  }
  useEffect(()=>{
    getCategories();
  },[])
if(isLoading){
  return <h2>loading...</h2>
}

*/
const getCategories=async()=>{
  const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
return data;
//onsole.log(data);
}
const{data,isLoading}=useQuery('web_categories',getCategories);
if(isLoading){
  return <p>...loading</p>
}
  return (
    <>
    <div className='auto-container gategorystyle py-2'>
    <div className='text-center gategorystyletext pt-3'><h1>...Gategories...</h1></div>

       <Swiper
             modules={[Navigation, Pagination,Autoplay]}

      spaceBetween={50}
      slidesPerView={3}
      navigation
    autoplay={
      {delay:4000}
    }
      pagination={{ clickable: true,
     el:'.swiper-custom-pagination'
      }}
    //  onSlideChange={() => console.log('slide change')}
    //  onSwiper={(swiper) => console.log(swiper)}
    >
          {data?.categories.length?data?.categories.map((category)=>

      <SwiperSlide key={category._id}>
     <Link to={`/categoriesDetails/${category._id}`}>
      <div className='category'>
      <img src={category.image.secure_url} />
<h2 className='fs-5'>{category.name}</h2>
      </div>
       
        </Link>

      </SwiperSlide>
      ):'no categories found' }
    </Swiper>
    <div className='swiper-custom-pagination pb-5'></div>


</div>
</>
  )
}
