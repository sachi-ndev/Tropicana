import React from 'react'
import plant from './Assets/plants.png'
import  pot from './Assets/pots.png'
import combos  from './Assets/combos.png'

import plant1 from './Assets/AGLAONEMA PINK 1.png'
import plant2 from './Assets/ZZ plants 1.png'
import plant3 from './Assets/Sansevieria Fernwood Mikado 1.png'

export default function Categories() {
  return (
    <div className='relative'>
      <h1 className='text-[34px] font-semibold w-[12rem] mx-auto  mt-[100px] '>Categories</h1>
      <div className= 'mx-auto  w-[90vw] md:mt-[10rem] mt-[16rem] h-auto gap-[100px] md:gap-6 md:h-[16rem] flex flex-col md:flex-row items-center justify-between '>
      
      <div className='h-[140px] w-[300px]  bg-white rounded-2xl  relative top-0 ' id='cateshadow'>
            <h1 className='text-[27px] absolute   bottom-[0px] px-[7.5rem] w-[4rem] '>Plant</h1>
            <div className='w-full absolute left-5 bottom-10' id='opendiv'>
            <img src={plant} className=' w-[256px] ' alt="" />
            </div>
        </div>

        <div className='h-[140px] w-[300px]  bg-white rounded-2xl  relative top-0 ' id='cateshadow'>
            <h1 className='text-[27px] absolute   bottom-[0px] px-[7.5rem] w-[4rem] '>Pot</h1>
            <div className='w-full absolute left-16 bottom-10' id='opendiv'>
            <img src={pot} className=' w-[156px] ' alt="" />
            </div>
        </div>


         <div className='h-[140px] w-[300px]  bg-white rounded-2xl  relative top-0 ' id='cateshadow'>
            <h1 className='text-[27px] absolute   bottom-[0px] px-[7.5rem] w-[4rem] '>Combos</h1>
            <div className='w-full absolute left-5 bottom-10' id='opendiv'>
            <img src={combos} className=' w-[256px] ' alt="" />
            </div>
        </div>

        
        <div className='h-[140px] w-[100px]'>
            <button className='bg-[rgb(0,0,0)] hidden md:block px-4  py-1 rounded-full text-white mt-[100px]'>See all</button>
            </div>
      </div>



      <div className= 'mx-auto  w-[90vw] mt-0 md:mt-[5rem] h-auto gap-[100px] md:gap-6 md:h-[16rem] flex flex-col md:flex-row items-center justify-between '>


      <div className='h-[112px] w-[350px] md:w-[416px]  bg-[#98c34733] rounded-2xl flex items-center justify-center relative ' id='cateshadow2'>

            <img src={plant1} className=' w-[170px] absolute bottom-5 left-0' alt="" />
            <h1 className='text-[27px] w-[4rem] '>Flowering Plants</h1>
        
        </div>

        <div className='h-[112px] w-[350px] md:w-[416px]  bg-[#98c34733] rounded-2xl flex items-center justify-center relative ' id='cateshadow2'>

<img src={plant2} className=' w-[170px] absolute bottom-5 left-0' alt="" />
<h1 className='text-[27px] ml-[80px]   '>Low-Light Plants</h1>

</div>


<div className='h-[112px] w-[350px] md:w-[416px]  bg-[#98c34733] rounded-2xl flex items-center justify-center relative ' id='cateshadow2'>

<img src={plant3} className=' w-[170px] absolute bottom-5 left-0' alt="" />
<h1 className='text-[27px] w-[4rem] '>Flowering Plants</h1>

</div>


   
      </div>
    </div>
  )
}
