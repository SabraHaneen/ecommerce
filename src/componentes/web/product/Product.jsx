import React, { useContext } from 'react'
import { useQuery } from 'react-query';

import {  useParams } from 'react-router-dom'
import axios from 'axios';
import { CartContext } from '../../../context/CartContext';

export default function Product() {
  //  console.log(useParams());

    const {productId}=useParams();
    const {addToCartContext}=useContext(CartContext);
    const addToCart=async(productId)=>{
        const res= await addToCartContext(productId);
       return res;
    }
    const getProductDetails=async()=>{
        const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);

      
        return data.product;
    }
    const{data,isLoading}=useQuery('product_details',getProductDetails);
    //console.log(data);

    if(isLoading){
     return <p>...Loading</p>
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
             {data.subImages.map((img)=>
             <div className='images mt-3'>
                <img src={img.secure_url}  />
             </div>
             )}
            </div>
      
        <div className='col-lg-4'>

        <h2 className='fs-6'>{data.name}</h2>
        <p>{data.price}</p>
        <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add To Cart</button>
        </div></div>  </div>
  )
}
