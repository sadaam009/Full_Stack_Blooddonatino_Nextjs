import React from 'react'
import Header from '../components/Header'
import Heropage from '../components/Heropage'
import Collaborators from '../components/Collaborators'
import OurMission from '../components/OurMission'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div className=''>
      <Header/>
      <Heropage/>
      <OurMission/>
      <Collaborators/>
      <Footer/>
    </div>
  )
}

export default page
