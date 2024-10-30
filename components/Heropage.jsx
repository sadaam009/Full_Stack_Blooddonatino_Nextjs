import React from 'react'
import Image from 'next/image'
import imgs from '../images/bloodimg.png'
import img1 from '../images/bloodsadaqo.png'
const Heropage = () => {
  return (
    <div className=' flex mt-[8rem] items-center space-x-9 mx-[3rem]  '>
      <div className=" w-[44vw] space-y-7 ">
      <h1 className=' text-[2.5rem] font-semibold text-[#333333]  '> Donate Blood, Save a Life </h1> 
            <p className=' font-Far text-[1rem]  text-[#003366]  '>Welcome to our Blood Donation Center, where every donation
                 brings hope and healing. Donating blood is a simple, safe, and selfless 
                act that has a profound impact on
                   </p>
         <button className=' py-3 px-7 bg-black text-white
          font-semibold rounded-md'> Donate Now</button>
      </div>

      <div className="grid grid-cols-2 grid-row-2  gap-5">
          <div className=" bg-white shadow-lg w-[300px] h-[400px] ">
          <Image src={imgs}/>
          </div>
          <div className=" bg-white shadow-lg w-[300px] h-[400px] ">
          <Image src={img1}/>
          </div>
      </div>
    </div>
  )
}

export default Heropage
