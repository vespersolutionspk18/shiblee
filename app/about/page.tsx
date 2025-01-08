import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AboutHero from './AboutHero'
import AboutMainHero from './AboutMainHero'
import AboutBento from './AboutBento'
import HomeForm from '../HomeForm'

const page = () => {
  return (
    <>
    <Header />
    <AboutHero />
    <AboutMainHero />
    <AboutBento />
    <HomeForm />
    <Footer />
    </>
  )
}

export default page