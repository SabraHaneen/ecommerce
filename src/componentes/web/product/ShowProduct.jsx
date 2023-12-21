import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom';
import style from '../product/Product.module.css';
import Categories from '../categories/Categories';
import { useQuery } from 'react-query';
export default function ShowProduct() {
  
    const[paginationItems,setPaginationItems]=useState([]);
    const[pageCount,setPageCount]=useState(0);
    const[search,setSearch]=useState('');
   // console.log(search)

    let limit=4;
   
      useEffect(()=>{
  const getData=async()=>{
      const res=await axios.get(`${import.meta.env.VITE_API_URL}/products?page=1&limit=${limit}`);
     // console.log(res.data);
     const total=res.data.total;
     setPageCount(Math.ceil(total/limit));
   //  console.log(total);
     setPaginationItems(res.data.products);
  };
     getData();
   }
   ,[]);
      //console.log(paginationItems);
  
  const fetchData=async(currentPage)=>{
      const res=await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${currentPage}&limit=${limit}`);
      return res.data.products;
  }
      const handlePageClick=async(data)=>{
          let currentPage=data.selected+1;
          const currentPageData=await fetchData(currentPage);
          setPaginationItems(currentPageData);
         // console.log(data.selected);
      }
  
  
  
  
  
  const{data,isLoading}=useQuery("showProduct",fetchData);
  
  if(isLoading){
    return <p>....Loading</p>
  }
  
  
  
    return (
      <>
       <div className=' py-3'><Categories/>
  </div>
  
  
  <div className={`${style.titlestyle}`}><h1>Check all Productes</h1></div>
  
  <div className=' d-flex flex-row justify-content-end align-items-center pe-3'>
    <h3 className='pe-3'>Search</h3>

<input type="text"    placeholder='Enter Product name' onChange={(e) => setSearch(e.target.value)}
  className='border rounded-2 form-control' />
           </div>
  
  <div className='container p-5'>
          <div className='row row-gap-3'>
          {
       (
        paginationItems.filter((product)=>{return search.toLowerCase()==''?product
                    :product.name.toLowerCase().includes(search);
           }).map((product) => {
                        return (
                            <div className='col-md-4 '>
        <div className="card  ms-3" style={{width: '20rem'}}>
          
           <img src={product.mainImage.secure_url} className="card-img-top img-fluid " alt="..." />
         <div className="card-body">
           <p className="card-text fs-6">product name:{product.name}</p>
           <p>Product Price:{product.price}</p>
           <Link to={`/product/${product._id}`} className={`${style.detailesInfo}`}> more Detailes</Link>
         </div>
         </div>
       
       </div>
                        )
                    })
                )}

            
  </div></div>
  
  
  
  
      <ReactPaginate
      previousLabel={'previous'}
    nextLabel={'next'}
    pageCount={pageCount}
    onPageChange={handlePageClick}
    containerClassName='pagination justify-content-center'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    previousClassName='page-item'
    previousLinkClassName='page-link'
    nextClassName='page-item'
    nextLinkClassName='page-link'
    activeLinkClassName='active'
  
      
      
      />
      </>
    )
  
}
