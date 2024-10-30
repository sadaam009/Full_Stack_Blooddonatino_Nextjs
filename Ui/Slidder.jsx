import React from 'react'
import Image from 'next/image'
import kalkaal from '../images/kalkaal2.png'
import {
    Card,
  
  } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
const Slidder = () => {
  return (
    <div className=''>
 <Carousel className="w-full max-w-sm ">
      <CarouselContent className=" flex justify-center">
       <CarouselItem className=' flex space-x-2'>
        <div className="w-[400px] h-[300px] bg-orange-300  ">
          <Image src={kalkaal}/>
        </div>

        <div className="w-[400px] h-[300px] bg-orange-300  ">
          <Image src={kalkaal}/>
        </div>
       </CarouselItem>

       <CarouselItem>
        <div className="w-[400px] h-[300px] bg-orange-300  ">
          <Image src={kalkaal}/>
        </div>
       </CarouselItem>

       <CarouselItem>
        <div className="w-[400px] h-[300px] bg-orange-300  ">
          <Image src={kalkaal}/>
        </div>
       </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>





    </div>
  )
}

export default Slidder
