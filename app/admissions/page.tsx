import React from 'react'
import Header from '../Header'
import AdmissionsHero from './AdmissionsHero'
import AdmissionsMain from './AdmissionsMain'
import HomeForm from '../HomeForm'
import Footer from '../Footer'

const page = () => {
  return (
    <>
    <Header />
    <AdmissionsHero />
    <AdmissionsMain />
    <HomeForm />
    <Footer />
    </>
  )
}

export default page