import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { Button } from '@/components/ui/button'

const HomeForm = () => {
  return (
    <div className="flex flex-col p-10 font-sans font-light mt-32">
    <div className="xl:relative">
        {/* Background Image Div */}
        <div
            className="w-full rounded-2xl bg-cover bg-center h-[440px]"
            style={{ backgroundImage: `url('/assets/footerform.jpeg')` }}
        >
        </div>
        <h5 className="text-2xl mt-3 text-gray-950">@shiblee <span className="text-gray-600">/ contact</span></h5>
    </div>
    
    {/* Content Overlapping with Image */}
    <div className="flex flex-col xl:flex-row gap-5 justify-between items-end xl:-mt-[260px] z-10">
        <div className="xl:w-[60%]">
            <h5 className="text-gray-950 text-xl xl:text-3xl text-justify">
                You can contact us by filling out the form in the right column with your details. Once we receive your information, <span className="text-gray-600"> we will promptly reach out to you via email with the next steps for further assistance.</span>
            </h5>
        </div>
        <div className="xl:w-[40%] w-full rounded-tl-2xl py-10 xl:pl-10 flex flex-col gap-3 bg-[#F6F5FA]">
            <h5 className="text-3xl font-medium mb-3 font-gray-800">Get in Touch</h5>
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
                <Button className="bg-[#110CDF] font-sans p-5 mt-3 text-xl font-light hover:bg-[#1a1881]">Submit</Button>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default HomeForm