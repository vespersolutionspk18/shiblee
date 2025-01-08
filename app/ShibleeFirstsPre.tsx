import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ShibleeFirstsPre = () => {
  return (
    <div className="p-10 bg-[#F6F5FA] font-sans font-light flex flex-col xl:flex-row  xl:gap-16 justify-between ">
        <div className="xl:w-[45%] py-10 flex flex-row gap-8 xl:gap-16 items-center">
        <Link href="/admissions"><Button className="bg-[#110CDF] font-sans p-3 xl:p-5 text-md xl:text-xl font-light hover:bg-[#1a1881]">Join Us</Button></Link>
        <p className="text-md xl:text-xl text-gray-700 text-justify">Shiblee High was established in 1988, takes pride in offering quality high school education </p>
        </div>
        <div className="xl:w-1/2 xl:px-20 xl:py-10">
        <h2 className=" text-gray-900 font-light text-3xl xl:text-5xl">Shiblee Firsts</h2>
        </div>
    </div>
  )
}

export default ShibleeFirstsPre