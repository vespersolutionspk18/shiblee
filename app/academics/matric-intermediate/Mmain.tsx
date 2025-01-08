import React from 'react'
import { Separator } from '@/components/ui/separator'

const Mmain = () => {
  return (
    <div className="p-10 -mb-[120px] font-sans font-light flex flex-col gap-10">
    <h2 className="text-5xl text-black">Overview</h2>
    <p className="text-2xl text-justify text-gray-800 tracking-tight leading-tight">
    The Metric/Intermediate program is designed for students seeking to specialize in a specific field and pursue their education in Pakistan. The program is a tried and tested method of creating young bright minds. The qualification is granted by Board of Intermediate & Secondary Education and is widely accepted across universities locally and internationally.



    </p>
    <Separator  />
    <h2 className="text-3xl text-black">Available Subjects in Matriculation</h2>
    <div className="text-center  grid grid-cols-3 gap-0 border border-gray-300">
{/* Row 1 */}
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Maths</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Physics</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Chemistry</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Biology</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Computer Science/ICT</div>


{/* Row 2 */}
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Pakistan Studies</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Islamiat</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Urdu</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">English</div>


</div>
<Separator  />
<h2 className="text-3xl text-black">Available Subjects in Intermediate</h2>
    <div className="text-center  grid grid-cols-3 gap-0 border border-gray-300">
{/* Row 1 */}
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Pre-Medical</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Pre-Engineering</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Commerce</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Intermediate in Computer Science/ICT</div>


{/* Row 2 */}
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Humanities</div>
<div className="p-4 text-2xl text-gray-800 border border-gray-300">Islamic Studies</div>


</div>


</div>
  )
}

export default Mmain