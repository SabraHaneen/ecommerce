import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { CartContext } from '../../../context/CartContext';
import style from './Navbar.module.css';

import { useQuery } from 'react-query';
import Header from '../header/Header';

export default function Navbar() {
  const {getCartContext}=useContext(CartContext);
  const{count}=useContext(CartContext);
  let{userToken ,setUserToken,userData,setUserData}=useContext(UserContext);
  let navigate=useNavigate();
  


const  logout=()=>{
localStorage.removeItem("userToken");
setUserToken(null);
setUserData(null);
navigate('/home');
}
let getCart=async()=>{
  const res= await getCartContext();
 return res;
}
const{data,isLoading}=useQuery("cart",getCart);

if(isLoading){
  return(  <p>...Loading</p>
  )
}



  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className='container'>
  <a className= "navbar-brand" href="#"><img src="img/logo-2.webp" alt="" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto mb-2 mb-lg-0 pb-5">
      <li className="nav-item active">
        <Link className="nav-link" to="/"><span>Home</span> </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/categories"><span>Categories</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/showproduct"><span>Products</span></Link>
      </li>
      {userToken? <><li className='nav-item'>
        <Link className='nav-link' to="/cart">      <span>Cart   ({count}) </span>
 </Link></li></> :null
        }
     
      </ul>
      <ul className="navbar-nav"> 
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle "  href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {userData!=null?
          <div className='d-flex flex-column  '>
            
              <img src={userData.image.secure_url} alt="" className='img-fluid ps-4' />
              <span className='ps-3' >
            {userData.userName}
          </span>
          </div>
          :"Accounts"}
        </a>
        <ul className="dropdown-menu" >
      {userToken==null? <><li><Link className="dropdown-item" to="/register"><span>register</span></Link></li>
<li><hr className='dropdown-divider'/></li> 
<li><Link className="dropdown-item" to="/login"><span>login</span></Link></li>

</>:<>
<li><Link className="dropdown-item" to="/userProfile"><span>Profile</span></Link></li>
<li><Link className="dropdown-item"  onClick={logout} ><span>logout</span></Link></li>
<li><hr className='dropdown-divider'/></li> 
</>}  



        </ul>
      </li>
      
    </ul>
   
  </div>
  </div>
</nav>
    

    
    </>
  )
}
