import React, {  useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import style from './Profile.module.css'
import { Link, Outlet } from 'react-router-dom';
export default function UserProfile() {
    let{userData,loading}=useContext(UserContext);

if(loading){
  return <p>...loading</p>
}
  return (
    <>
<aside className={`${style.profile}`}>
  <div className={`${style.profileLinks}`}>
    <nav className='pt-5' >
      <Link to=''>Info</Link>
      <Link to='contact'>Contact</Link>
      <Link to='myorder'>My Order</Link>


    </nav>
  </div>
  <div className={`${style.userData}`}>
  
    <Outlet/>
  </div>
  

</aside>





    </>
  )
}
