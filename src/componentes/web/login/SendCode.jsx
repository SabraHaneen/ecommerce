
import { useNavigate } from 'react-router-dom';
import { sendCodeSchema } from '../../../validation/validate';
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import axios from 'axios';
import { toast } from 'react-toastify';
import style from './Login.module.css';


export default function SendCode() {
    const navigate=useNavigate();
    const initialValues={
        email:'',

    };
    const onSubmit = async userData=>{
        const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,userData);
console.log(data.message);
              if(data.message=='success'){
                 toast.success('will send u a code ', {
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
             navigate('/resetpass');

        
           
             
                 }




  
            const formik= useFormik({
                initialValues,
                 onSubmit,
                validationSchema:sendCodeSchema,
               
                
            });
            const inputs =[
  
                {
                   id:'email',
                   type:'email',
                   name:'email',
               title:'enter your email' , 
               value: formik.values.email,
               
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
    <h2 className='pt-5 text-center'>Enter Your Email</h2>
    <div className='row text-center  d-flex justify-content-center align-items-center py-3  '>
        < div className='d-flex justify-content-center align-items-center  w-25 rounded-3 py-4 bg-danger-subtle '>
<form className="row g-3 flex-column  align-content-center" onSubmit={formik.handleSubmit}  >

{renderInputs}

 
  <div className="col-auto text-center d-flex justify-content-center align-items-center">
    <button type="submit" className={`${style.loginbtn}`} disabled={!formik.isValid}>send me Code</button>
  </div>
</form>

</div>
        
   
        </div>
      
    </div>

</>
  )
}
