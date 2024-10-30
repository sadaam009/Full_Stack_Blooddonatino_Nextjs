import React from 'react'
import Image from 'next/image'
import Logo from'../images/bloodlogo.png'
import {  } from '@heroicons/react/solid';
import { Input } from "@/components/ui/input"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=' bg-[#1E2833] mt-[10rem]  '>

       {/* main controller container */}
      <div className=" mx-[2rem] pt-[1rem] ">

        {/* Header container */}

        <div className=" flex justify-between items-center ">
            <Image className=' w-[100px] ' src={Logo}/>
            <div className="flex items-center space-x-4">
                <h1 className=' text-white '>Ready to get started?</h1>
                <button className=' py-3 px-7 bg-white text-black
          font-semibold rounded-md'> Donate Now</button>
            </div>

       
        </div>
        
             {/* Body Container */}
     <div className=" flex  justify-between mx-[2rem] mt-[1rem] my-5 ">

   {/* Header Section */}
    <div className=" space-y-3">
       <h1 className=' text-[1.5rem] text-white'> Subscribe to our new</h1>
        <Input type="email" placeholder="Email Address" />
        <button className=' bg-white text-black py-2 px-5 rounded-md'>Submit</button>
      </div>
     {/* End Header Section */}

     {/* Links Container Main */}

     <div className=" flex space-x-[10rem] ">

        {/* service Container */}
        <div className=" flex flex-col space-y-4 ">
            <h1 className='my-5 text-[1.2rem] font-semibold
             text-white '>Services</h1>

             <Link className=' font-semibold text-white' href=''>Email Marketing</Link>
             <Link className=' font-semibold text-white' href=''>Campaigns</Link>
             <Link className=' font-semibold text-white' href=''>Email Marketing</Link>
             <Link className=' font-semibold text-white' href=''>Branding</Link>
             <Link className=' font-semibold text-white' href=''>Offline</Link>
             
        </div>
        {/* End service Container */}

        {/* About Container */}
        <div className="flex flex-col space-y-4">
        <h1 className=' text-[1.2rem] font-semibold
             text-white my-5'>Services</h1>

             <Link className=' font-semibold text-white' href=''>Email Marketing</Link>
             <Link className=' font-semibold text-white' href=''>Campaigns</Link>
             <Link className=' font-semibold text-white' href=''>Email Marketing</Link>
             <Link className=' font-semibold text-white' href=''>Branding</Link>
             <Link className=' font-semibold text-white' href=''>Offline</Link>
             
        </div>
        {/* End About Container */}

         {/* Help Container */}
        <div className="flex flex-col space-y-4 ">
        <h1 className=' text-[1.2rem] font-semibold
             text-white my-5 '>Services</h1>

             <Link className=' font-semibold text-white' href=''>Email Marketing</Link>
             <Link className=' font-semibold text-white' href=''>Campaigns</Link>
             <Link className=' font-semibold text-white' href=''>Email Marketing</Link>
             <Link className=' font-semibold text-white' href=''>Branding</Link>
             <Link className=' font-semibold text-white' href=''>Offline</Link>
             
        </div>
        {/* End Help Container */}
     </div>
      {/* End Links Container Main */}

     </div>
      {/* End Body Container */}
      <hr className=' border-[1px] border-gray-400' />
      {/* Last Footer */}
      <div className="">
   
        {/* Container Title */}

        <div className=" flex space-x-2">
            <h1>Terms & Conditions</h1>
            <h1>Privacy Policy</h1>
        </div>
        {/* End Container Title */}

      </div>
       {/* End Last Footer */}

      </div>
    </div>
  )
}

export default Footer
