import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#110CDF] font-sans font-light text-white flex flex-col xl:flex-row w-full pt-10 px-10">
        <div className="xl:w-[58%] flex flex-col gap-10 justify-between">
        <div className="flex flex-row w-full justify-between ">
            <h5 className="text-xl xl:text-3xl">Empowering <br></br>Minds at <br></br>Shiblee High</h5>
            <p className="w-1/2 text-justify text-lg text-gray-100">At Shiblee High, we are committed to providing a world-class education that equips
sudents with knowledge and skills
to thrive in an ever-changing world.</p>
        </div>
        <div>
        <div className="bg-[#3734ee] rounded-full text-lg py-1 px-2 inline-block">
        College Road Tehsil Safdarabad, District Sheikhupura
</div>


        </div>
        <div className="flex flex-row gap-20 jusify-between pb-3">
    <p className="text-lg">&copy; Shiblee High 2018-2024. All Rights Reserved.</p>
    <div className="flex flex-row gap-5">
<p className="text-lg underline">TERMS OF SERVICE</p>
<p className="text-lg underline">PRIVACY POLICY</p>
</div>
</div>

        </div>
        <div className="xl:w-[42%] flex flex-row items-center justify-center xl:items-end xl:justify-end">
        <div className="w-[70%] mt-10 xl:mt-0 px-10 pt-10 pb-5 border-x-[1px] border-t-[1px] border-b-[0px] border-white rounded-t-2xl flex flex-col gap-3">
        <h5 className="text-3xl ">Navigation</h5>
        <ul className="gap-2 text-2xl text-blue-200">
            <Link href="/#"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
         
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
        <h5 className="text-3xl ">Organisation</h5>
        <ul className="gap-2 text-2xl text-blue-200">
            <Link href="/about/mission-and-vision"><li>Mission & Vision</li></Link>
            <Link href="/shucp"><li>SHUCP</li></Link>

            <Link href="/admissions"><li>Admission</li></Link>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer