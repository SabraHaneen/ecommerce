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
    <div className='container row  py-4'>
      <div className='col-md-4 '>
<aside className={`${style.profile}`}>
   <div className={`${style.profileLinks}`}>
    <nav className={`${style.linkstyle}`} >
      <Link to='' className='text-decoration-none'><span>Info</span></Link>
      <Link to='contact' className='text-decoration-none'><span>Contact</span></Link>
      <Link to='myorder' className='text-decoration-none'><span>My Order</span></Link>


    </nav>
  </div>
  
</aside>
</div>
 <div className='col-md-8 d-flex justify-content-center pt-5 '> <div className={`${style.userData}`}>
  
  <Outlet/>
</div></div>

</div>
  





    </>
  )
}
