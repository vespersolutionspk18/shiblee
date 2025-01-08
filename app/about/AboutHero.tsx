import React from 'react'

const AboutHero = () => {
  return (
    <div className="w-full h-[520px] font-sans font-light text-white bg-top bg-cover bg-blend-multiply bg-black/30 flex flex-col p-16 items-start justify-end" style={{ backgroundImage: `url('/assets/mainhero.jpeg')` }}>
        <h1 className="text-7xl font-extralight">About<br></br><span className="font-normal">Shiblee High</span></h1>
    </div>
  )
}

export default AboutHero