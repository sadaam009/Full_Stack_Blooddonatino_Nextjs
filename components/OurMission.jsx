import React from 'react'
import Image from 'next/image'
import img from'../images/farmajo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety} from '@fortawesome/free-solid-svg-icons';
const OurMission = () => {
  return (
    <div className=' flex mt-[9rem] justify-around mx-[3rem] '>
       

       <div className=" space-y-5 w-[50%] ">
       <h1 className=' text-[3rem]   '>Our Mission</h1>
        <p>Our mission is to save lives by promoting the importance of 
            blood donation, connecting donors with those in need, and
             providing safe and accessible donation opportunities</p>

              {/* List Of Titles */}
              <div className="  ">
                <ul className='space-y-6'>
                    <li>1. Safety</li>
                    <li>2. Integrity</li>
                    <li>3. Community</li>
                    <li>4. Compassion</li>
                </ul>
              </div>
             
             <button className=' py-3 px-7 bg-black text-white
          font-semibold rounded-md'> Join Us</button>
       </div>
       <Image className=' rounded-[2rem] w-[500px] ' src={img}/>


    </div>
  )
}

export default OurMission
