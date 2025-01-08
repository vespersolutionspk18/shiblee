import React from 'react'

const ShibleeFirsts = () => {
  return (
    <div className="flex flex-row bg-[#F6F5FA] w-full">
        <div className="w-1/2 bg-center bg-cover" style={{ backgroundImage: `url('/assets/shibleefirsts.jpeg')` }}>

        </div>
        <div className="w-1/2 font-sans font-light">
            <div className="p-5 xl:p-10 border-t-[1px] border-t-gray-300 flex gap-2 xl:gap-5 flex-col">
                <h3 className="text-gray-800 text-2xl xl:text-4xl">Student Societies</h3>
                <p className="text-md xl:text-xl text-gray-700">First low income catering high school in Sheikhupura to have student societies and extracurricular clubs</p>
            </div>
            <div className="p-5 xl:p-10 border-t-[1px] border-t-gray-300 flex gap-2 xl:gap-5 flex-col">
                <h3 className="text-gray-800 text-2xl xl:text-4xl">AP Courses Pioneer</h3>
                <p className="text-md xl:text-xl text-gray-700">First school in central Punjab to offer Advanced Placement courses</p>
            </div>
            <div className="p-5 xl:p-10 border-t-[1px] border-b-[1px] border-y-gray-300 flex gap-2 xl:gap-5 flex-col">
                <h3 className="text-gray-800 text-2xl xl:text-4xl">Merit & Need</h3>
                <p className="text-md xl:text-xl text-gray-700">First non-government funded institution to offer need-based merit scholarships while operating on a low-fee model</p>
            </div>
        </div>
    </div>
  )
}

export default ShibleeFirsts