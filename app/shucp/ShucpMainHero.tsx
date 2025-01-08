import { Separator } from '@/components/ui/separator'
import React from 'react'

const ShucpMainHero = () => {
  return (
    <div className="p-10 xl:-mb-[150px] font-sans font-light flex flex-col gap-10">
    <h2 className="text-5xl text-black">Overview</h2>
    <p className="text-2xl text-justify text-gray-800 tracking-tight leading-tight">
    Shiblee High and it&apos;s Bachelors program-center collaborate with one another to improve the student experience. We recognized that a mutually beneficial relationship may be established between both branches in multiple fields. 

    </p>
    <Separator />
    <h2 className="text-5xl text-black">Benefits of SHUCP</h2>
    <div className="flex flex-row gap-5 font-light">
    <div className="rounded-2xl w-1/3 p-8 border-[1px] border-gray-300 flex flex-col gap-3">
    <h5 className="text-3xl text-black">Research</h5>
    <p className="text-xl text-justify text-gray-800">Students from Grade 9-12 get to collaborate with currently enrolled bachelors students in assisting them with writing thesis, conducting on-ground research and helping review their methodology. This allows them to gain important insights in the world of post-secondary research, and allows them to provide valuable contribution to topics they are passionate about outside the classroom</p>
    </div>
    <div className="rounded-2xl w-1/3 p-8 border-[1px] border-gray-300 flex flex-col gap-3">
    <h5 className="text-3xl text-black">Sports</h5>
    <p className="text-xl text-justify text-gray-800">In sport divisions with no age restriction, SHUCP allows for coaches to select top talent from our high school. This allows students to play in a united Shiblee-team, creating more successful outcomes in winning competitions and matches.
    </p>
    </div>
    <div className="rounded-2xl w-1/3 p-8 border-[1px] border-gray-300 flex flex-col gap-3">
    <h5 className="text-3xl text-black">Faculty</h5>
    <p className="text-xl text-justify text-gray-800">Teachers and Professors have the ability to expand their scope of teaching through SHUCP by attaining excellence in high school course material and teaching secondary-level pupils as well as post-secondary bachelors students. 
    </p>
    </div>
    </div>
   
</div>
  )
}

export default ShucpMainHero