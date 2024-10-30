import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/bloodlogo.png'
const Header = () => {
  return (
    <div  className=' flex justify-between  items-center mt-[1rem] mx-[3rem] '>

       <div className=" flex space-x-2 items-center">
       <Image src={Logo} width={100}/>
       <h1 className=' text-[1.5rem] font-semibold   '>Donate Blood</h1>
       </div>

        <div className=" flex space-x-6 justify-center">

          <Link className=' font-semibold text-gray-900 hover:border-b-4 border-gray-700' href=''>Home</Link>
          <Link className=' font-semibold text-gray-900 hover:border-b-4 border-gray-700' href=''>About Us</Link>
          <Link className=' font-semibold text-gray-900 hover:border-b-4 border-gray-700' href=''>FindBlood</Link>
          <Link className=' font-semibold text-gray-900 hover:border-b-4 border-gray-700' href=''>Register</Link>
        </div>

        <button className=' py-2 px-10 border-2 border-black 
        rounded-md text-[1.1rem] font-semibold hover:text-white hover:bg-black '>LogIn</button>

    </div>
  )
}

export default Header
