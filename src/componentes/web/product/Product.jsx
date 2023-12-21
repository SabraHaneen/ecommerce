import React, { useContext } from 'react'
import { useQuery } from 'react-query';

import {  useParams } from 'react-router-dom'
import axios from 'axios';
import { CartContext } from '../../../context/CartContext';
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import style from './Product.module.css';


export default function Product() {
  //  console.log(useParams());
  const initialValues={
    comment:'',
    rating:'',

};
const {productId}=useParams();
const {addToCartContext}=useContext(CartContext);
const addToCart=async(productId)=>{
 // console.log(productId);
    const res= await addToCartContext(productId);
   return res;
}
const getProductDetails=async()=>{
    const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
//console.log(data);
  
    return data;
}

const onSubmit = async comments=>{
   
const token=localStorage.getItem("userToken");

  const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/products/${productId}/review`,comments
 , {headers:{Authorization:`Tariq__${token}`}}
  );

  
 
 // console.log(data.message);
  if(data.message=='success'){
      localStorage.setItem("userToken",data.token)
      setUserToken(data.token);
      toast.success('thanks for rating', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
  }
  

  
      }




const formik= useFormik({
  initialValues,
   onSubmit,
 
  
});
const inputs =[
  
  {
     id:'comment',
     type:'text',
     name:'comment',
 title:'comment' , 
 vlaue: formik.values.comment,
 
 },
 {
     id:'rating',
     type:'select',
     name:'rating',
 title:'user rating' , 
 vlaue: formik.values.password,
 
 },
 
     ];
     const renderInputs= inputs.map((input,index)=>
     <Input
      type={input.type}
      id={input.id} 
      name={input.name}
      title={input.title}
       key={index}  value={input.value} 
       onChange={input.onChange || formik.handleChange}
        errors={formik.errors}
        onBlur={formik.handleBlur}
        touched={formik.touched}
        />
     )
  
  
    const{data,isLoading}=useQuery('product_details',getProductDetails);

    if(isLoading){
     return <p>...Loading</p>
    }
  return (
    <div className='container py-5'>
      <div className='row' key={data.product._id}>
<div className='col-md-8 '> <h5 className="card-title fs-6  pb-2">Product Name:{data.product.name}</h5>
<p className="card-text  p-2">Description:<small className="text-body-secondary">{data.product.description}</small></p>
      <p className="card-text  pb-4">Price:<small className="text-body-secondary">{data.product.price}</small></p>
      </div>  
      <div className='col-md-4  text-end '>   
                <button className={`${style.addInfo}`} onClick={()=>addToCart(data.product._id)}>Add To Cart</button>
            </div> 


     
        {data.product.subImages.map((img)=>
  <div className="card mb-3 col-md-4" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-12">
      <img src={img.secure_url} className="img-fluid rounded-start w-100" alt="..." />
    </div>
   
  </div>
</div>
             )}
             
</div>
            
             <div className='row text-center '>
             <div className='col-md-4 '>
             <h5 className="card-title fs-6 pt-4 pb-2">Customers Reviewes</h5>
             {data.product.reviews.map((review)=>
             <div className='d-flex flex-row justify-content-center pt-3'>
                           <img src={review.createdBy.image.secure_url} className='rounded-3 pe-3 pb-5'/>

                           <p className='text-black pe-4'>{review.createdBy.userName} : <span>{review.comment}</span></p>
             </div>
             

             
             )}
             </div>

             <div className='col-md-4'>
             <h5 className="card-title fs-6 pt-4 pb-2">Customers Rating</h5>

<p>Rating:{data.avgRating}</p>
             </div>
            
             </div>
             <div className='row'>
            
              <div className='col-md-5'>
        <form onSubmit={formik.handleSubmit}  >
        {renderInputs}
        <div className='text-center d-flex justify-content-center'>     
               <button type='submit' className={`${style.detailesInfo}`}  disabled={!formik.isValid}>send comment</button>
</div>

    </form>
        </div>
             

             </div>
        </div>
  )
}
