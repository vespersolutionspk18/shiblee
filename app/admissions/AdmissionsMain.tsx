import React from 'react'
import { Separator } from '@/components/ui/separator'

const AdmissionsMain = () => {
  return (
    <div className="p-10 font-sans font-light flex flex-col gap-10">
        <h2 className="text-5xl text-black">Overview</h2>
        <p className="text-2xl text-justify text-gray-800 tracking-tight leading-tight">
        Students can apply to Shiblee High from May 2025 to August 2025


        </p>
        <Separator />
        <h3 className="text-5xl text-black">Requirements</h3>
        <div className="flex flex-col gap-3">
        <p className="text-2xl text-gray-800">1. Above the age of 14 at the time of application
        </p>
        <p className="text-2xl text-gray-800">2. Must Submit B-Form
        </p>
        <p className="text-2xl text-gray-800">3. Must submit parent&apos;s identity card and contact details

        </p>
        <p className="text-2xl text-gray-800">4. If being admitted in the O/A Level or Metric/Intermediate programs after the first year of program initiation then the student must provide previous academic records


        </p>
        <Separator className="xl:mt-10"/>
        <h5 className="xl: mt-10 text-center text-3xl">Admissions are currently closed</h5>
        </div>
    </div>
  )
}

export default AdmissionsMain