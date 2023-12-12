
//import React, { useContext } from 'react'
//import { UserContext } from '../../../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { resetPassSchema } from '../../../validation/validate';
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ResetPassword() {
    const navigate=useNavigate();
    const initialValues={
        email:'',
        code:'',
        password:'',

    };
    const onSubmit = async userData=>{
   
      
   const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,userData);
   //{email:userData.email,password:userData.password,code:userData.code}
      
    
      
         if(data.message=='success'){
         
            toast.success('your password reset succesfully ', {
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
     
        
        navigate('/login');
        
            }
            const formik= useFormik({
                initialValues,
                 onSubmit,
                validationSchema:resetPassSchema,
               
                
            });
            const inputs =[
  
                {
                   id:'email',
                   type:'email',
                   name:'email',
               title:'enter your email' , 
               value: formik.values.email,
               
               },
             
            {
                id:'password',
                type:'password',
                name:'password',
            title:'enter your new password' , 
            vlaue: formik.values.password,
            
            },
            {
                id:'code',
                type:'input',
                name:'code',
            title:'enter your code' , 
            value: formik.values.code,
            
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
<form className="row g-3 flex-column  align-content-center" onSubmit={formik.handleSubmit}  >
<div className="col-auto text-center">
    <label >Reset Your Password</label>
  </div>
{renderInputs}

 
  <div className="col-auto text-center">
    <button type="submit" className="btn btn-primary mb-3" disabled={!formik.isValid}>Reset Password</button>
  </div>
</form>



</>
  )
}
