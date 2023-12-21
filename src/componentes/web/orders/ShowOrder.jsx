import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import style from './Order.module.css'


export default function ShowOrder() {
  let ordernumber=0;
    const getOrders= async()=>{
        try{
            const token=localStorage.getItem("userToken");
            const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/order`,
{headers:{Authorization:`Tariq__${token}`}});
//console.log(data.orders);
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
 <h2 className='text center p-5  text-center'>Your Orders</h2>

    
<table className="table p-5">
  <thead >

    <tr>
      <th scope="col" >Order#</th>
      <th scope="col">address</th>
      <th scope="col">phoneNumber</th>
      <th scope="col">Final price</th>

      <th scope="col">Paymenet type</th>
      <th scope="col">order status</th>


    </tr>
  

  </thead>
  <tbody className={`${style.tabletext}`}>
  {data?.orders.length?(data.orders.map((order)=>
    <tr key={order._id}>
      <th scope="row">{ordernumber++}</th>
      <td>{order.address}</td>
      <td>{order.phoneNumber}</td>
      <td>{order.finalPrice}</td>
      <td>{order.paymentType}</td>
      <td>{order.status}</td>
    </tr>
    
    )):<p>no data found</p>}
  </tbody>
</table>


    </>
  )
}
