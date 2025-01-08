import Header from '@/app/Header'
import React from 'react'
import Mhero from './Mhero'
import Mmain from './Mmain'
import HomeForm from '@/app/HomeForm'
import Footer from '@/app/Footer'

const page = () => {
  return (
  <>
  <Header />
  <Mhero />
  <Mmain />
  <HomeForm />
  <Footer />
  </>
  )
}

export default page