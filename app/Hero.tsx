import React from 'react'

const Hero = () => {
  return (
    <div className="relative pb-20 w-full flex p-16 flex-row xl:flex-row items-end h-[320px] xl:h-screen bg-cover bg-top font-sans font-light" style={{ backgroundImage: `url('/assets/mainhero.jpeg')` }}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/20"></div>
    {/* Content */}
    <h1 className="relative z-10 text-4xl xl:text-7xl text-white">
        Empowering the future at <br /> <b>Shiblee High of Colleges</b>
    </h1>
</div>

  )
}

export default Hero