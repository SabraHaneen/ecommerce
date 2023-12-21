import React from 'react'

export default function Input({type='text',id,name,title,value,onChange ,errors,onBlur,touched}) {
  return (
    <>
    <div className='input-group mb-3 d-flex flex-column '>
    <label htmlFor={id} className='pb-1 ps-2'>{title}</label>
   <input type={type} name={name} className='form-control ms-1 w-100 rounded-3 ' id={id} value={value} onChange={onChange} onBlur={onBlur}/>
  {touched[name] &&errors[name]&& <p className='text text-danger'> {errors[name]}</p>}
   </div>
    </>
  )
}
