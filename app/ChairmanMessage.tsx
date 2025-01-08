import React from 'react'

const ChairmanMessage = () => {
  return (
    <div className="flex mt-16 xl:mt-32 flex-col  p-10 w-full font-sans font-light">
        <div className="flex flex-col xl:flex-row justify-between">
        <div className="text-3xl xl:text-5xl font-gray-700 xl:w-1/2">
            <h2>
                    Chairman&apos;s Message
                </h2>
            </div>
            <div className="xl:w-1/2 text-xl xl:text-3xl text-gray-800 text-start xl:text-end mt-5 xl:mt-0">
                <h2>
                    Shiblee High is more than just a place to<br></br> earn a degree. It&apos;s a place where you can <br></br><span className="text-gray-500">discover your potential</span>
                </h2>
            </div>
            

        </div>
        <div className="flex flex-col xl:flex-row mt-8 xl:mt-16">
            <div className="xl:w-1/2  flex flex-col gap-2 xl:gap-5 ">
                <div className="w-full h-[440px] xl:h-[720px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url('/assets/ranashahid.jpeg')` }}>

                </div>
            </div>
            <div className="xl:w-1/2 mt-10 xl:mt-0 xl:px-10 flex flex-col justify-between text-md xl:text-2xl text-gray-800">
                <p className="text-justify">
                I warmly welcome all readers, especially aspiring students and their parents, at the time of our new admissions. We are dedicated to providing quality education in an environment conducive to learning.<br></br><br></br> Our focus on research-driven teaching ensures that students receive top-tier education, encompassing knowledge, skills, and values. Shiblee stands out for its commitment to academic excellence and service to others. Whether in business, science, or the humanities, Shiblee offers a technologically advanced, internationally connected learning experience.<br></br><br></br> We are adapting to the challenges of higher education in the 21st century, offering new programs, facilities, and faculty. Our success is driven by the collaborative effort of scholars, staff, and motivated students, and we aim to equip students with the tools for a successful future.
                </p>
                <div>
                <h5 className="text-gray-950 font-medium text-3xl mt-10">
                Rana Shahid
                    <br></br>
                    <span className="text-gray-800 font-light">
                    Chairman
                    </span>
                </h5>
                <p className="text-gray-600 text-xl">Swarthmore College, Class of 1998</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChairmanMessage