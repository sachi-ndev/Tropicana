import React from 'react'
import womanimg from './Assets/Portrait of blonde woman holding a plant.png'
import star from './Assets/stars.png'
import Laraimg from './Assets/Young and beautiful woman in pink warm sweater, natural look, smiling, portrait on , isolated, long hair.png'
import potimg from './Assets/testnmlPot.png'


export default function Testinomials() {
  return (
    <div>
    <div className=' flex mx-auto w-[100vw] items-center justify-evenly mb-5  relative'>
      <div className=' py-[4rem] w-[15rem] flex flex-col justify-between '>
        <div className='border-b-[1px]   md:w-[15rem]  p-6 border-primary'>
          <h1 className=' md:text-[50px] font-semibold text-tertiary'>400+</h1>
          <p className=' md:text-[22px]'>PRODUCTS</p>
        </div>
        <div className='border-b-[1px]  p-6 border-primary'>
          <h1 className=' md:text-[50px] font-semibold text-tertiary'>1100+</h1>
          <p className=' md:text-[22px]'>OREDERS</p>
        </div>
        <div className='border-b-[1px]  p-6 border-primary'>
          <h1 className=' md:text-[50px] font-semibold text-tertiary'>1250+</h1>
          <p className=' md:text-[22px]'>PLANT TYPES</p>
        </div>


      </div>


      <div className='md:w-[50vw] '></div>

      <div className='absolute top-12 w-full flex items-center justify-center  md:border-b-[1px]  border-primary '>

      <div className='w-[477px] h-[573px] relative flex items-center justify-center'>

        <img src={womanimg} alt="" className=' md:w-[477px] sm:hidden hidden  md:h-[573px] z-30 relative  md:block'/>
        <div className='bg-primary w-[30rem] aspect-square rounded-full absolute top-[55px] z-0 sm:hidden hidden md:block'></div>
      </div>

      </div>






      <div className=' py-[4rem] w-[15rem] flex flex-col justify-between '>
        <div className='border-b-[1px]   md:w-[15rem]  p-6 border-primary'>
          <h1 className=' md:text-[50px] font-semibold text-tertiary'>350+</h1>
          <p className=' md:text-[22px]'>PROJECTS DONE</p>
        </div>
        <div className='border-b-[1px]  p-6 border-primary'>
          <h1 className=' md:text-[50px] font-semibold text-tertiary'>400+</h1>
          <p className=' md:text-[22px]'>HAPPY CLIENTS</p>
        </div>
        <div className='border-b-[1px]  p-6 border-primary'>
          <h1 className=' md:text-[50px] font-semibold text-tertiary'>1250+</h1>
          <p className=' md:text-[22px]'>PLANT TYPES</p>
        </div>


      </div>
      <div>
      </div>
    </div>
       <div className=' w-screen  flex flex-col item-center justify-between mt-[25px] relative'>
        <div className='   text-center flex flex-col items-center  mt-[5rem]'>
          <h1 className='text-[34px] font-semibold'>Testimonials</h1>
          <p className='text-[18px] w-[45vw]'>A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them.</p>
          <img src={star} alt="" className='mt-5' />
          <div className='bg-[rgb(217,217,217)] w-[100px] h-[100px] mt-5 relative rounded-full overflow-hidden'>

          <img src={Laraimg} alt="" className=' ' />
          </div>
          
        <img src={potimg} className='w-[500px] absolute left-0 -top-[150px]' alt="" id='potimg'/>
        </div>


        <div className='h-[327px] w-[100vw] bg-tertiary mt-[10rem] flex  '>




            <div className='md:w-[60%] w-full  h-full  flex flex-col justify-center pl-[4rem] items-start' id='harvleft'>
              <h1 className='text-[30px]  text-white'>Discover the convenience of online shopping &
              <br />
                the opportunity of <span className='capitalize  font-semibold'>franchise ownership</span> </h1>
              <button className=' px-[2rem] py-[.5rem] rounded-full mt-8 bg-[rgb(255,255,255)]'>Enquire Now</button>
            </div>
            <div className='w-[40%] h-full hidden md:block' id='harvestay'></div>
        </div>




       </div>
    </div>
  )
}
