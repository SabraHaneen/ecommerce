import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext';

export default function UserInfo() {
    let{userData,loading}=useContext(UserContext);

    if(loading){
      return <p>...loading</p>
    }
  return (
<>
<img src={userData.image.secure_url} alt="userimage" />

    <h2 className='text-black pt-1'>{userData.userName}</h2>
  




 </>  )
}
