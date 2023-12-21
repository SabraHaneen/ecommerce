import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext';
import style from './Profile.module.css'

export default function UserInfo() {
    let{userData,loading}=useContext(UserContext);

    if(loading){
      return <p>...loading</p>
    }
  return (
<>
<div className='d-flex flex-row justify-content-start align-items-center'>
<img src={userData.image.secure_url} alt="userimage" />

<h2 className={`${style.textstyle}`}>{userData.userName}</h2>
</div>

  




 </>  )
}
