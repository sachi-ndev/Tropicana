import React from 'react'

export default function Verification() {
  return (
    <div className=" w-[100vw] z-40 flex flex-col items-center justify-start">
    <div className="h-[100vh] w-[100vw] flex flex-col justify-between items-start mb-40" id="shopbg">
      <div className="h-[70vh] flex flex-col  mt-[15rem]  items-start pl-[50px] md:pl-[125px]">
        <h1 id="acctitle"  className="font-semibold">Verification</h1>
        <p className='mt-4'>Enter the code we sent through your phone number</p>

        <div className=" flex flex-col items-start h-[40vh] justify-between mt-[5rem] ">
  

        <div className="flex flex-row items-center gap-5 justify-between mx-auto w-full max-w-xs">
      <div className="w-16 h-16">
        <input
          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
          type="tel"
          name="otp1"
          maxLength="1"
          id=""
          placeholder=""
        />
      </div>
      <div className="w-16 h-16">
        <input
          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
          type="tel"
          name="otp2"
          maxLength="1"
          id=""
          placeholder=""
        />
      </div>
      <div className="w-16 h-16">
        <input
          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
          type="tel"
          name="otp3"
          maxLength="1"
          id=""
          placeholder=""
        />
      </div>
      <div className="w-16 h-16">
        <input
          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
          type="tel"
          maxLength="1"
          name="otp4"
          id=""
          placeholder=""
        />
      </div>
    </div>

    
        </div> 
        <div className="mb-[3rem] w-full text-center">
        <p className="">Didn't Received the code <span className="text-[#0045A3]"> Resent </span></p>
        <button className=" px-[8rem] rounded-full text-white py-4 mt-[35px] text-[20px] bg-secondary">Sign Up</button>
        </div>  
      </div>
   
      
    </div>
  </div>
  )
}
