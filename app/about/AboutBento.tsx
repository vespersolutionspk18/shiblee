import React from 'react'

const AboutBento = () => {
  return (
    <div className="h-full xl:-mb-[186px] flex flex-row gap-5 p-10 font-sans font-light">
        <div className="w-1/2  bg-shockingblue p-10 items-start    flex flex-col  gap-16 hover:gap-20 hover:cursor-pointer transition-all duration-700 rounded-2xl" >
        <h3 className="text-3xl text-white">Shiblee High School-University Collaboration Program (SHUCP) </h3>
        <p className="text-white text-xl text-justify">
        Shiblee High and its Bachelors program collaborate to enrich student learning. High schoolers gain research experience by assisting with undergraduate theses, while top athletes join university teams. Faculty members expand their teaching expertise across both educational levels.
        </p>
        <h5 className="text-white text-2xl hover:underline hover:cursor-pointer">Learn More</h5>
        </div>
        <div className="w-1/2  flex flex-col gap-5 ">
        <div className="h-1/2 hover:h-3/4 transition-all duration-700 w-full bg-center bg-cover bg-blend-multiply bg-black/30 flex flex-col justify-between rounded-2xl p-10 text-white" style={{ backgroundImage: `url('/assets/missionst.jpeg')` }}>
        <h3 className="text-3xl">The Leadership behind Shiblee High</h3>
        <h5 className="text-white text-2xl hover:underline hover:cursor-pointer">View</h5>
        </div>
        <div className="h-1/2 hover:h-3/4 transition-all duration-700 w-full bg-gray-200 rounded-2xl justify-between flex flex-col p-10">
        <h3 className="text-3xl text-gray-800">Mission Statement & Values</h3>
        <h5 className="text-black text-2xl hover:underline hover:cursor-pointer">View</h5>
        </div>
        
        </div>
    </div>
  )
}

export default AboutBento