import React from 'react'
import Image from 'next/image'
import org1 from'../images/kalkaal2.png'
import org2 from'../images/digfeer3.png'
import org3 from'../images/shaafi1.png'
import org4 from'../images/somsudanes.jpg'
// import Slidder from'../Ui/Slidder'
const Collaborators = () => {
  return ( 
    <div className='  mt-[8rem]  space-y-7 mx-[3rem]'>
        <h1 className=' text-[3rem] pl-[2rem]   '>Our Collaborators</h1>
      <div className=" flex  justify-around">
      <div className=" grid grid-cols-4 grid-rows-1 
       items-center gap-3  ">
        <div className=" w-[300px]  hover:transition duration-300 ease-in-out h-[250px] bg-white shadow-xl rounded-lg pl-[4rem] pt-[4rem] border-2 border-gray-400 ">
        <Image className='w-[170px] ' src={org1} />
        </div>
        <div className=" w-[300px] h-[250px] bg-white shadow-xl rounded-lg pl-[4rem] pt-[4rem] border-2 border-gray-400 ">
        <Image className='w-[170px] ' src={org2} />
        </div>
        <div className=" w-[300px] h-[250px] bg-white shadow-xl rounded-lg pl-[4rem] pt-[4rem] border-2 border-gray-400 ">
        <Image className='w-[170px] ' src={org3} />
        </div>
        <div className=" w-[300px] h-[250px] bg-white shadow-xl rounded-lg pl-[4rem] pt-[4rem] border-2 border-gray-400 ">
        <Image className='w-[170px] ' src={org4} />
        </div>
     
     
       
      
      </div>
      </div>
      
    </div>
  )
}

export default Collaborators
