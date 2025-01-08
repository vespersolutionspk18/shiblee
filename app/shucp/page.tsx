import React from 'react'
import Header from '../Header'
import ShucpHero from './ShucpHero'
import Footer from '../Footer'
import ShucpMainHero from './ShucpMainHero'
import HomeForm from '../HomeForm'

const page = () => {
  return (
    <div>
        <Header />
        <ShucpHero />
        <ShucpMainHero />
        <HomeForm />
        <Footer />
    </div>
  )
}

export default page