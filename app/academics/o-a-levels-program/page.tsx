import Header from '@/app/Header'
import React from 'react'
import OHero from './OHero'
import OMain from './OMain'
import HomeForm from '@/app/HomeForm'
import Footer from '@/app/Footer'

const page = () => {
  return (
 <>
 <Header />
 <OHero />
 <OMain />
 <HomeForm />
 <Footer />
 </>
  )
}

export default page