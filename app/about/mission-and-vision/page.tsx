import Footer from '@/app/Footer'
import Header from '@/app/Header'
import HomeForm from '@/app/HomeForm'
import React from 'react'
import MissionHero from './MissionHero'
import MissionMain from './MissionMain'

const page = () => {
  return (
   <>
   <Header />
   <MissionHero />
   <MissionMain />
   <HomeForm    />
   <Footer />
   </>
  )
}

export default page