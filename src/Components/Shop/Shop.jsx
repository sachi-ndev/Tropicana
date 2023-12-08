import React from 'react'
import ShopNav from './ShopNav'
import Createacc from './Createacc'
import './shop.css'
import ShopFooter from './ShopFooter'
import Login from './Login'


export default function Shop() {
  return (
    <div className='relative'>
        <div className='absolute inset-0 top-7 z-0 h-[10vh]'>
            <ShopNav/>  
        </div>
            <Createacc/>
            {/* <Login/> */}
            {/* <Verification/> */}

        <ShopFooter/>
    </div>
  )
}
