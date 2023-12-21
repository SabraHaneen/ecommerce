import React, { useContext } from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
  import { loginSchema } from '../../../validation/validate';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import style from './Login.module.css';


export default function Login() {
    let{setUserToken,userToken}=useContext(UserContext);
    const navigate=useNavigate();
if(userToken){
    navigate(-1);
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
        autoClose: 3000,
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
    <h2 className='pt-5 text-center'>Login Account</h2>
    <div className='row text-center  d-flex justify-content-center align-items-center py-3  '>
        <div className={`${style.loginbackimg}`}>
        <form onSubmit={formik.handleSubmit}  >
        {renderInputs}
        <div className='d-flex justify-content-center align-items-center'>     
               <button type='submit'className={`${style.loginbtn}`} disabled={!formik.isValid}>login</button>
</div>
<div className='forgotPass col-md-12 pt-2'>
            <Link to="/sendcode" className={`${style.loginbtn}`}>Forgot My Password</Link>
        </div>
    </form>
        </div>
        
   
    </div>
  
</div>

 </>  )
}
