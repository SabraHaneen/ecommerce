
import { useNavigate } from 'react-router-dom';
import { sendCodeSchema } from '../../../validation/validate';
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import axios from 'axios';
import { toast } from 'react-toastify';

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
                     autoClose: false,
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
<form className="row g-3 flex-column  align-content-center" onSubmit={formik.handleSubmit}  >
<div className="col-auto text-center">
    <label >Enter Your Email</label>
  </div>
{renderInputs}

 
  <div className="col-auto text-center">
    <button type="submit" className="btn btn-primary mb-3" disabled={!formik.isValid}>send me Code</button>
  </div>
</form>



</>
  )
}
