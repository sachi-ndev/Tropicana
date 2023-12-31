import React from 'react'
import insta from './../../assets/insta.png'
import fb from './../../assets/fb.png'
import twitter from './../../assets/twitter.png'
import footelogo from './assets/harvfooterimg.png'

export default function ShopFooter() {
  return (
    <div className='h-[211px] w-[100vw] p-[1rem] md:p-[4rem] bg-[#C9C9C9] mt-[16rem] flex font-semibold justify-between items-center'>
        <div className='min-w-[12rem] w-[20%] hidden md:block'>
        <img src={footelogo} alt="" />
        </div>
      <div className='md:w-[50%] sm:w-[65%] w-[70%]  md:px-[4rem] flex justify-between items-center'>
        <p>Help</p>
        <p>Contact Us</p>
        <p>Privacy & Terms</p>
      </div>

      <div className='md:w-[20%] w-[30%] px-[10px] md:px-[2rem] flex justify-between items-center'>
        <img src={fb} alt="" />
        <img src={twitter} alt="" />
        <img src={insta} alt="" />

      </div>
    </div>
  )
}
