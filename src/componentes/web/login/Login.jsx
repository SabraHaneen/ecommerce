import React, { useContext } from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
  import { loginSchema } from '../../../validation/validate';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

export default function Login() {
    let{setUserToken,userToken}=useContext(UserContext);
    const navigate=useNavigate();
if(userToken){
    navigate(-2);
}
    const initialValues={
        email:'',
        password:'',

    };
  
   const onSubmit = async users=>{
   
      
const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);

if(data.message=='success'){
    localStorage.setItem("userToken",data.token)
    setUserToken(data.token);
    toast.success('Account login succesfully', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

navigate('/categories');

    }
  
    const formik= useFormik({
        initialValues,
         onSubmit,
        validationSchema:loginSchema,
       
        
    });
  
    const inputs =[
  
 {
    id:'email',
    type:'email',
    name:'email',
title:'user email' , 
vlaue: formik.values.email,

},
{
    id:'password',
    type:'password',
    name:'password',
title:'user password' , 
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
  return (
<>
<div className='container'>
    <h2 className='pb-3'>Login Account</h2>
    <div className='row text-center'>
        <div className='col-md-12'>
        <form onSubmit={formik.handleSubmit}  >
        {renderInputs}
        <div className='text-center'>     
               <button type='submit' className='btn rounded-pill text-black ' disabled={!formik.isValid}>login</button>
</div>

    </form>
        </div>
        <div className='forgotPass col-md-12 pt-5'>
            <Link to="/sendcode">Forgot My Password</Link>
        </div>
   
    </div>
  
</div>

 </>  )
}
