import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { CartContext } from '../../../context/CartContext';
import { useQuery } from 'react-query';

export default function Navbar() {
  const {getCartContext}=useContext(CartContext);
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
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className='container'>
  <a className="navbar-brand" href="#">H-Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/categories">Categories</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Products</a>
      </li>
      {userToken? <><li className='nav-item'>
        <Link className='nav-link' to="/cart">      Cart   ({data.count!=null?data.count:"(0)"}) 
 </Link></li></> :null
        }
     
      </ul>
      <ul className="navbar-nav"> 
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {userData!=null?userData.userName:"Accounts"}
        </a>
        <ul className="dropdown-menu" >
      {userToken==null? <><li><Link className="dropdown-item" to="/register">register</Link></li>
<li><hr className='dropdown-divider'/></li> 
<li><Link className="dropdown-item" to="/login">login</Link></li>

</>:<>
<li><Link className="dropdown-item" to="/userProfile">Profile</Link></li>
<li><Link className="dropdown-item"  onClick={logout} >logout</Link></li>
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
