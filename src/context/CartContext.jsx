import axios from "axios";
import { createContext,  useState } from "react";
import { toast } from "react-toastify";

export const CartContext= createContext(null);
export function CartContextProvider({children}){
   let[count,setCount]=useState(null);

    const addToCartContext= async (productId)=>{
        try{
const token=localStorage.getItem("userToken");
const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
{productId},{headers:{Authorization:`Tariq__${token}`}});
if(data.message=='success'){
    toast.success('product added succefully',{
        position:"top-right",
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark",
    });
setCount(++count);
}

return data;
      //  return productId
        }
        catch(error){
console.log(error);        }
    }
    const getCartContext= async()=>{
        try{
            const token=localStorage.getItem("userToken");
            const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
{headers:{Authorization:`Tariq__${token}`}});


setCount(data.count);
            return data;

        }
        catch(error){
            console.log(error);

        }
    }
    const removeCartItem=async(productId)=>{
        try{
            const token=localStorage.getItem("userToken");
            const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,{productId},
{headers:{Authorization:`Tariq__${token}`}});
if(data.message=='success'){
    toast.success('product removed succefully',{
        position:"top-right",
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark",
    });}
          
            return data;

        }
        catch(error){
            console.log(error);

        } 
    }
   const clearCart=async()=>{
        try{
            const token=localStorage.getItem("userToken");
            
            const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,{},
{headers:{Authorization:`Tariq__${token}`}});
if(data.message=='success'){
    toast.success('Your Cart is Empty',{
        position:"top-right",
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark",
    });}
          
            return data;

        }
        catch(error){
            console.log(error);

        } 
    }
  
   const decrementQuntity=async(productId)=>{
    try{
        const token=localStorage.getItem("userToken");
        const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`,
        {productId},{headers:{Authorization:`Tariq__${token}`}});
        if(data.message=='success'){
            toast.success('product quntity decremented succefully',{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme:"dark",
            });
        }
     
    

   return data;
        }
        catch(error){
console.log(error);        }
    }
    const incrementQuntity=async(productId)=>{
        try{
            const token=localStorage.getItem("userToken");
            const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`, {productId},{headers:{Authorization:`Tariq__${token}`}});

            if(data.message=='success'){
                toast.success('product quntity incremented succefully',{
                    position:"top-right",
                    autoClose:3000,
                    hideProgressBar:false,
                    closeOnClick:true,
                    pauseOnHover:true,
                    draggable:true,
                    progress:undefined,
                    theme:"dark",
                });
            }

       return data;
            }
            catch(error){
    console.log(error);        }
        }
    

    return <CartContext.Provider value={{addToCartContext,getCartContext,removeCartItem,count,setCount,decrementQuntity,incrementQuntity,clearCart}}>
{children}
    </CartContext.Provider>
    
    
}
