import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext';
export default function UserContact() {
    let{userData,loading}=useContext(UserContext);

    if(loading){
      return <p>...loading</p>
    }
  return (
    <>
    <div className='d-flex flex-column justify-content-start'>
    <h2>{userData.email}</h2>
    <h2>no phone number</h2>
    </div>
   
    </>
  )
}
