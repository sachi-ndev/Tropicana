import React from 'react'
import insta from './assets/insta.png'
import fb from './assets/fb.png'
import twitter from './assets/twitter.png'

export default function Footer() {
  return (
    <div className='h-[211px] w-[100vw] md:p-[4rem] p-[2rem] mt-[4rem] bg-[#C9C9C9] flex font-semibold justify-between items-center'>
        <div className='w-[20%] sm:hidden hidden md:block'></div>
      <div className='md:w-[50%] sm:w-[70%] w-[70%]  md:px-[4rem] flex justify-between items-center'>
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
