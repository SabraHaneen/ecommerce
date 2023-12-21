import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
     <header>
    <div className={`${style.images}`}>
      <div className={`${style.headerContent}`}>
        <div className='text-center'>
        <h1>welcome to our store</h1>
            <p >here you can find the best of everything you need</p>
            <Link className={`${style.btnstyle}`} to="/showproduct">Shop now</Link>

</div>
</div>
    </div>

     
    </header>
    </>
  )
}
