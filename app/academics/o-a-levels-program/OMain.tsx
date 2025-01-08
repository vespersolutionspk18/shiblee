import { Separator } from '@/components/ui/separator'
import React from 'react'

const OMain = () => {
  return (
    <div className="p-10 -mb-[120px] font-sans font-light flex flex-col gap-10">
        <h2 className="text-5xl text-black">Overview</h2>
        <p className="text-2xl text-justify text-gray-800 tracking-tight leading-tight">
        The O/A Levels program is designed for students seeking a globally recognized qualification, offering a strong foundation in liberal arts education or specialized fields. Unlike traditional Matric and Intermediate programs, O/A Levels emphasize critical thinking, problem-solving, and a broader curriculum.


        </p>
        <Separator  />
        <h2 className="text-3xl text-black">Available Subjects in O-Levels</h2>
        <div className="text-center  grid grid-cols-5 gap-0 border border-gray-300">
  {/* Row 1 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Maths</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Physics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Chemistry</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Biology</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Further Mathematics</div>
  
  
  {/* Row 2 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Sociology</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Economics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Business</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Accounting</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">ICT</div>
  
  
  {/* Row 3 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Urdu</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">English</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">English Literature</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Pakistan Studies</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Islamiat</div>
</div>
<Separator  className="mt-8"/>
<h2 className="text-3xl text-black">Available Subjects in A-Levels</h2>
        <div className="text-center  grid grid-cols-5 gap-0 border border-gray-300">
        <div className="p-4 text-2xl text-gray-800 border border-gray-300">Maths</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Physics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Chemistry</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Biology</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Further Mathematics</div>
  
  
  {/* Row 2 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Sociology</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Economics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Business</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Accounting</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">Urdu</div>
        </div>

    </div>
  )
}

export default OMain