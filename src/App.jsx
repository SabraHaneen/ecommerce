import { RouterProvider } from 'react-router-dom'
import {router} from './layouts/routes.jsx'


import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext.jsx';
import { CartContext } from './context/CartContext.jsx';

export default function App() {
 

let{setUserToken}=useContext(UserContext);
let{getCartContext}=useContext(CartContext);
useEffect(()=>{
if(localStorage.getItem("userToken")!=null){
  setUserToken(localStorage.getItem("userToken"));
getCartContext().count;
}},[]);


 

  return (
<RouterProvider router={router}/> 

 )
}
