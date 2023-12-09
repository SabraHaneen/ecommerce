import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

export default function CategoryDetails() {
   // console.log(useParams());

    const {categoryId}=useParams();
    const getCategoryDetails=async()=>{
        const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);

      
        return data.products;
    }
    const{data,isLoading}=useQuery('category_details',getCategoryDetails);
   //console.log(data);
   if(isLoading){
    return <p>...Loading</p>
   }
  return (
    <div className='products container p-5'>
         <div className='row '>
        {data.length?data.map((product)=>
        <div className='product col-md-4  ' key={product._id}>
       <div className='row '>
        <div className='col-md-4 '>
        <img src={product.mainImage.secure_url}/>
        </div>
        <div className='col-md-8'>

            <h6 className='fs-6 pb-2'>{product.name}</h6> 
            <Link to={`/product/${product._id}`}>Detailes</Link>

            </div>
      
       </div>
          
            </div>
       

        ): <h2>no products found</h2>}
    </div>
    </div>
  )
}
