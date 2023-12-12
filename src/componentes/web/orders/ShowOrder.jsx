import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

export default function ShowOrder() {
    const getOrders= async()=>{
        try{
            const token=localStorage.getItem("userToken");
            const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/order`,
{headers:{Authorization:`Tariq__${token}`}});
console.log(data.orders);
            return data;

        }
        catch(error){
            console.log(error);

        }
    }
    const{data,isLoading}=useQuery("MyOrders",getOrders);
    if(isLoading){
        return <p>..loading</p>
    }
     return (

    <>
    
 <h2 className='text center p-5 text-info text-center'>Your Orders</h2>
 {data?.orders.length?(data.orders.map((order)=>
 <div className="item container d-flex row ps-5" key={order._id}>
 
 <div className="order-info d-flex flex-row col-md-2 ps-5" >
 <h6 >Final Price :</h6>
   <p className='ps-4 pb-1' >{order.finalPrice}</p>
  
 </div>
 <div className="order-info d-flex flex-row col-md-3 ps-5" >
 <h6 >Address Info:</h6>
   <p className='ps-2 pb-3' >{order.address}</p>
   <p className='ps-2 pb-3' >{order.phoneNumber}</p>

  
 </div>
 <div className="order-info d-flex flex-row col-md-3 ps-5" >
 <h6 >Order Status :</h6>
   <p className='ps-2 pb-3' >{order.status}</p>

  
 </div>
 <div className="order-info d-flex flex-row col-md-3 ps-5" >
 <h6 >payment Type  :</h6>
   <p className='ps-2 pb-3' >{order.paymentType}</p>

  
 </div>
</div>
)):<p>no data found</p>}
    
    </>
  )
}
