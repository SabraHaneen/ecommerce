import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import { useQuery } from 'react-query';
import { useFormik } from 'formik';
import { orderSchema } from '../../../validation/validate';
import Input from '../../pages/Input';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Orders() {

    const {getCartContext}=useContext(CartContext);

    const initialValues={
        couponName:'',
        address:'',
        phone:'',


    };

    
    const getCart=async()=>{
        const res= await getCartContext();
      

       return res;
    }
    const{data,isLoading}=useQuery("cart",getCart);
    if(isLoading){
       return <p>....Loading</p>
    }
  
  
           const onSubmit = async orderData=>{
            const token=localStorage.getItem("userToken");

          const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/order`,  {address:orderData.address,phone:orderData.phone},
          {headers:{Authorization:`Tariq__${token}`}});
          console.log(data.message);
                  if(data.message=='success'){
                     toast.success('your order send ', {
                         position: "top-right",
                         autoClose: 4000,
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
                     validationSchema:orderSchema,
                       
                        
                    });
                    const inputs =[
  
                        {
                           id:'couponName',
                           type:'text',
                           name:'couponName',
                       title:'enter your cupon' , 
                       value: formik.values.couponName,
                       
                       },
                       {
                        id:'address',
                        type:'text',
                        name:'address',
                    title:'enter your address' , 
                    value: formik.values.address,
                    
                    },
                    {
                        id:'phone',
                        type:'phonenumber',
                        name:'phone',
                    title:'enter your phone' , 
                    value: formik.values.phone,
                    
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

  return (
    <>
    <div className="cart">
      <div className="container ">
        <h2 className='text-center py-4'>Let's Complete Your Order</h2>
        <div className="row">
          <div className="cart-items ">
            <div className="products" id="products">
              <div className="item">
                <div className="product-info">
                  <h2>Product</h2>
                </div>
                <div className="quantity">
                  <h2>Quantity</h2>
                </div>
                <div className="price">
                  <h2>Price</h2>
                </div>
                <div className="subtotal">
                  <h2>Subtotal</h2>
                </div>
              </div>

{data?.products?(data.products.map((product)=>
  <div className="item" key={product._id}>
  <div className="product-info">
    <img src={product.details.mainImage.secure_url} />
    <div className="product-details">
      <h2>{product.details.name}</h2>
      <span>Color:black</span>
     
    </div>
  </div>
  <div className="quantity">
    
    <span>{product.quantity}</span>
  
  </div>
  <div className="price">${product.details.price}</div>
  <div className="subtotal">{product.details.price*product.quantity}</div>

</div>

)):<p>no data found</p>}
            

             
            </div>
         
          </div>
        
        </div>
     
    
    <form className="row g-3   " onSubmit={formik.handleSubmit}  >
<div className="col-auto text-start pb-5 ps-4">
    <label >complety your order</label>
  </div>
  <div className='row '>
<div className='col-md-4 '>
{renderInputs}

</div>
  </div>

 
  <div className="col-md-4 text-center ">
    <button type="submit" className="btn btn-primary mb-3" disabled={!formik.isValid}>send order</button>
  </div>
</form>
</div>
    </div>
    
    </>  )
}
