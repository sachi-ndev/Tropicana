import React from 'react'

export default function Login() {
  return (
    <div className=" w-[100vw] z-40 flex flex-col items-center justify-start">
    <div className="h-[100vh] w-[100vw] flex flex-col justify-between items-start mb-40" id="shopbg">
      <div className="h-[70vh] flex flex-col  mt-[15rem]  items-start pl-[50px] md:pl-[125px]">
        <h1 id="acctitle"  className="font-semibold">Login</h1>

        <div className=" flex flex-col items-start h-[40vh] justify-between mt-[5rem] ">
  

          <input
            type="tel"
            className="block w-[80vw] min-w-[30vw] md:w-[40vw] px-5 py-5 text-xl outline-none rounded-2xl mb-4"
            name="Phone Number"
            placeholder="Phone Number"
          />

          <input
            type="password"
            className="block w-[80vw] min-w-[30vw] md:w-[40vw] px-5 py-5 text-xl outline-none rounded-2xl mb-4"
            name="password"
            placeholder="Password"
          />
        </div> 
        <div className="mt-[5rem]">
        <button className=" px-[8rem] rounded-full text-white py-4 text-[20px] bg-secondary">Sign Up</button>
        <p className="mt-5">Already have an account? <span className="text-[#EE4B22]">Sign in</span></p>
        </div>  
      </div>
   
      
    </div>
  </div>
  )
}
