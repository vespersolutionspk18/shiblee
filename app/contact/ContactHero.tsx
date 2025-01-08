import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const ContactHero = () => {
  return (
   <div className=" font-sans font-light flex flex-col xl:flex-row">
    <div className="xl:w-1/2 p-10 ">
    <h2 className="text-5xl text-black">Our Contact Form</h2>
    <div className=" rounded-tl-2xl mt-5 flex flex-col gap-3 bg-[#F6F5FA]">

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h5 className="text-gray-600 text-xl">Full Name</h5>
                    <Input placeholder="Name Here" className="shadow-none font-sans font-light text-gray-600 text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="text-gray-600 text-xl">Email</h5>
                    <Input placeholder="abc@xyz.com" className="shadow-none font-sans font-light text-gray-600 text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="text-gray-600 text-xl">Phone No</h5>
                    <Input placeholder="+92312345678" className="shadow-none font-sans font-light text-gray-600 text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="text-gray-600 text-xl">Your Message</h5>
                    <Textarea placeholder="Your Message" className="shadow-none font-sans font-light text-gray-600 text-xl" />
                </div>
                <div>
                <Button className="bg-shockingblue font-sans p-5 mt-3 text-xl font-light hover:bg-[#1a1881]">Submit</Button>
                </div>
            </div>
        </div>
    </div>
    <div className="xl:w-1/2 bg-gray-200 p-10">
    <h2 className="text-black text-5xl">Our Details</h2>
    <div className="flex flex-col gap-2 mt-5">
    <h5 className="text-3xl text-black">Address:</h5>
    <p className="text-2xl text-gray-800">Shiblee High, College Road Tehsil Safdarabad, District Sheikhupura</p>
    </div>
    <div className="flex flex-col gap-2 mt-5">
    <h5 className="text-3xl text-black">Phone Number:</h5>
    <p className="text-2xl text-gray-800">03016990054</p>
    </div>
    <div className="flex flex-col gap-2 mt-5">
    <h5 className="text-3xl text-black">Website:</h5>
    <p className="text-2xl text-gray-800">shibleesheikhupura.org</p>
    </div>
    <div className="flex flex-col gap-2 mt-5">
    <h5 className="text-3xl text-black">Email Address:</h5>
    <p className="text-2xl text-gray-800">info@hibleesheikhupura.org</p>
    </div>
    </div>
   </div>
  )
}

export default ContactHero