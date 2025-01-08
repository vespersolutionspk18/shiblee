import Header from '@/app/Header'
import React from 'react'

import HomeForm from '@/app/HomeForm'
import Footer from '@/app/Footer'
import ApHero from './ApHero'
import ApMain from './ApMain'

const page = () => {
  return (
 <>
 <Header />
 <ApHero  />
 <ApMain />
 <HomeForm />
 <Footer />
 </>
  )
}

export default page