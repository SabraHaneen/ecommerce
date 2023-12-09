import React from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
  import { registerSchema } from '../../../validation/validate';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Register() {
  
   const onSubmit = async users=>{
        const formData=new FormData();
        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);
const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData)
if(data.message=='success'){
    formik.resetForm();
    toast.success('Account created succesfully,plz verify your email to login', {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}
    }
    const handelFieldChange=(event)=>{
    //    console.log(event);
formik.setFieldValue('image',event.target.files[0]);
    }
    const formik= useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:'',
            image:'',
        },
         onSubmit,
        validationSchema:registerSchema,
        /*validate:values=>{
            let errors={};
            if(!values.userName){
                errors.userName="user Name is required";
            }
            if(!values.email){
                errors.email="user email is required";
            }
            if(!values.password){
                errors.password="user password is required";
            }
            return errors;
        }*/
        
    });
  
    const inputs =[
        {
            id:'username',
            type:'text',
            name:'userName',
title:'user name' , 
vlaue: formik.values.userName,
 },
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
{
    id:'image',
    type:'file',
    name:' image',
title:'user image' , 
onChange: handelFieldChange,
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
    <h2 className='pb-3'>Create Account</h2>
    <div className='row text-center'>
        <div className='col-md-12'>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data" >
        {renderInputs}
        <div className='text-center'>     
               <button type='submit' className='btn rounded-pill text-black ' disabled={!formik.isValid}>Register</button>
</div>

    </form>
        </div>
   
    </div>
  
</div>

 </>  )
}
