import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext';
export default function UserContact() {
    let{userData,loading}=useContext(UserContext);

    if(loading){
      return <p>...loading</p>
    }
  return (
    <>
    <h2>{userData.email}</h2>
    <h3>no phone number</h3>
    </>
  )
}
