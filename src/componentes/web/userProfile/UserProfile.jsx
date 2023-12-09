import React, {  useContext } from 'react'
import { UserContext } from '../../../context/UserContext'

export default function UserProfile() {
    let{userData}=useContext(UserContext);


  return (
    <>


<div className='container p-5'> 

<div className='row'>
<div className='col-md-4 flex-column  align-item-center '>
        <img src={userData!=null?userData.image.secure_url:"no image"} alt="" className='pb-3' />
   
  
    </div>
    <div className='col-md-4 flex-column  align-item-center'>
    <h2 className='fs-6'>User Name:</h2>
   <span>{userData!=null?userData.userName:"no data found about user"}</span> 
  
    </div>
    <div className='col-md-4 flex-column pt-2'>
    <h2 className='fs-6'>User Email:</h2>
   <span>{userData!=null?userData.email:"no data found about user"}</span> 
    </div>
</div>

   
   </div>



    </>
  )
}
