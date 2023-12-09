import { RouterProvider } from 'react-router-dom'
import {router} from './layouts/routes.jsx'


import { CartContextProvider } from './context/CartContext.jsx';
//import { createContext, useEffect } from 'react';
//import { UserContext } from './context/UserContext.jsx';

export default function App() {
 
/*
let{setUserToken}=createContext(UserContext);
useEffect(()=>{
if(localStorage.getItem("userToken")!=null){
  setUserToken(localStorage.getItem("userToken"));

}},[]);

*/
 

  return (
    <CartContextProvider>
<RouterProvider router={router}/> 

    </CartContextProvider>
 )
}
