import { Separator } from '@/components/ui/separator'
import React from 'react'
import { GoStarFill } from "react-icons/go";

const Statistics = () => {
  return (
    <div className="flex flex-col xl:flex-row bg-[#F6F5FA] pt-10 pb-10 pl-10 items-start justify-between">
        <div className="xl:w-[30%] flex flex-col gap-10">
        <div className="flex flex-row  gap-3  h-[100px] items-start">
        <Separator orientation="vertical" className="h-full bg-gray-300 w-[1.5px]" />
        <div className="flex  flex-col gap-2">
           <div className="flex flex-row gap-5 w-full">
           <div className="bg-[#110CDF] h-8 w-8 p-2 rounded-md">
                <GoStarFill className="h-4 w-4 fill-white"/>
                
                
        </div>
        <p className="font-sans font-medium text-black text-2xl">53%</p>
           </div>
        <div>
        
                <p className="font-sans font-light text-gray-700 text-xl">of students go on to study in Pakistan&apos;s top 5 universities on merit-based scholarships</p>
            </div>
        </div>
</div>
<div className="flex flex-row  gap-3  h-[100px] items-start">
        <Separator orientation="vertical" className="h-full bg-gray-300 w-[1.5px]" />
        <div className="flex  flex-col gap-2">
           <div className="flex flex-row gap-5 w-full">
           <div className="bg-[#110CDF] h-8 w-8 p-2 rounded-md">
                <GoStarFill className="h-4 w-4 fill-white"/>
                
                
        </div>
        <p className="font-sans font-medium text-black text-2xl">29%</p>
           </div>
        <div>
        
                <p className="font-sans font-light text-gray-700 text-xl">of students study at Shiblee High on full tuition scholarship
                </p>
            </div>
        </div>
</div>
<div className="flex flex-row  gap-3  h-[100px] items-start">
        <Separator orientation="vertical" className="h-full bg-gray-300 w-[1.5px]" />
        <div className="flex  flex-col gap-2">
           <div className="flex flex-row gap-5 w-full">
           <div className="bg-[#110CDF] h-8 w-8 p-2 rounded-md">
                <GoStarFill className="h-4 w-4 fill-white"/>
                
                
        </div>
        <p className="font-sans font-medium text-black text-2xl">38%</p>
           </div>
        <div>
        
                <p className="font-sans font-light text-gray-700 text-xl">of students go on to complete degrees up to M.Phil level
                </p>
            </div>
        </div>
</div>
<div className="flex flex-row  gap-3  h-[100px] items-start">
        <Separator orientation="vertical" className="h-full bg-gray-300 w-[1.5px]" />
        <div className="flex  flex-col gap-2">
           <div className="flex flex-row gap-5 w-full">
           <div className="bg-[#110CDF] h-8 w-8 p-2 rounded-md">
                <GoStarFill className="h-4 w-4 fill-white"/>
                
                
        </div>
        <p className="font-sans font-medium text-black text-2xl">9%</p>
           </div>
        <div>
        
                <p className="font-sans font-light text-gray-700 text-xl">of students top the board in various subjects and areas

                </p>
            </div>
        </div>
</div>

        </div>
        <div className="hidden xl:block w-[50%] bg-center bg-contain h-[720px] bg-no-repeat bg-[#F6F5FA]" style={{ backgroundImage: `url('/assets/campus.png')` }}></div>
    </div>
  )
}

export default Statistics