import React from 'react'
import { Separator } from '@/components/ui/separator'

const ApMain = () => {
  return (
    <div className="p-10 -mb-[120px] font-sans font-light flex flex-col gap-10">
        <h2 className="text-5xl text-black">Overview</h2>
        <p className="text-2xl text-justify text-gray-800 tracking-tight leading-tight">
        The Advanced Placement (AP) program is an American educational initiative that offers high school students the opportunity to take college-level courses and exams. Administered by the College Board, the program allows students to earn college credits for universities based on their exam performance. AP courses are beneficial in developing critical thinking, subject mastery, and providing extensive academic rigor. This program is globally and nationally recognized; however, we encourage students who are exceptionally strong academically to take this route. The course is only available in Grades 11 and 12. (Online delivery is offered, but students wishing to enroll must pay higher subject fees)



        </p>
        <Separator  />
        <h2 className="text-3xl text-black">Available Subjects</h2>
        <div className="text-center  grid grid-cols-5 gap-0 border border-gray-300">
  {/* Row 1 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Music Theory</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP English Language and Composition</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP English Literature and Composition</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Comparative Government and Politics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP European History</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Human Geography</div>

  {/* Row 2 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Macroeconomics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Microeconomics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Psychology</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP United States Government and Politics</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP United States History</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP World History: Modern</div>

  {/* Row 3 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Calculus AB</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Calculus BC</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Computer Science A</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Computer Science Principles</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Precalculus</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Statistics</div>

  {/* Row 4 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Biology</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Chemistry</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Environmental Science</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Physics 1: Algebra-Based</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Physics 2: Algebra-Based</div>
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Physics C: Electricity and Magnetism</div>

  {/* Row 5 */}
  <div className="p-4 text-2xl text-gray-800 border border-gray-300">AP Physics C: Mechanics</div>
</div>


    </div>
  )
}

export default ApMain