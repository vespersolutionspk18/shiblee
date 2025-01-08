"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 

const ProgramStreams = () => {
  const router = useRouter();

  const navigateToProgram = (path: string) => {
    router.push(path);
  };

  return (
    <div className="font-sans font-light flex flex-col gap-10 p-10 bg-[#F6F5FA] items-center">
      <div className="flex flex-col gap-2 xl:gap-5 text-center">
        <h2 className="text-3xl xl:text-5xl text-gray-800">Our Academic Programs</h2>
        <h3 className="text-lg xl:text-2xl text-gray-800">3 Program Streams / <span className="font-medium">Since 2018 </span></h3>
      </div>

      <div id="programs" className="flex gap-5 flex-col xl:flex-row  xl:h-[840px] w-full">
        {/* O/A Levels Program */}
        <div
          className="group hover:cursor-pointer relative h-[320px] xl:h-[720px] xl:w-1/3 bg-cover bg-center rounded-xl hover:bg-black/30 hover:bg-blend-multiply xl:hover:w-1/2 transition-all duration-700"
          style={{ backgroundImage: `url('/assets/ac1.jpeg')` }}
          onClick={() => navigateToProgram('/academics/o-a-levels-program')}
        >
          {/* Black Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>

          {/* Content */}
          <div className="absolute -bottom-5 gap-1 left-5 flex flex-col  transition-all duration-700 group-hover:bottom-10">
            {/* First <p>: Always visible, moves up on hover */}
            <p className="text-white text-xl xl:text-2xl">O/A Levels Program</p>

            {/* Second <p>: Hidden by default, fades in and moves up on hover */}
            <p className="text-white text-md xl:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              Learn More about our O-A Levels Program
            </p>
          </div>
        </div>

        {/* Matric/Intermediate Program */}
        <div
          className="group hover:cursor-pointer relative h-[320px] xl:h-[720px] xl:w-1/3 bg-cover bg-center rounded-xl hover:bg-black/30 hover:bg-blend-multiply xl:hover:w-1/2 transition-all duration-700"
          style={{ backgroundImage: `url('/assets/ac2.jpeg')` }}
          onClick={() => navigateToProgram('/academics/matric-intermediate')}
        >
          {/* Black Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>

          {/* Content */}
          <div className="absolute -bottom-5 gap-1 left-5 flex flex-col  transition-all duration-700 group-hover:bottom-10">
            {/* First <p>: Always visible, moves up on hover */}
            <p className="text-white text-xl xl:text-2xl">Matric/Intermediate Levels Program</p>

            {/* Second <p>: Hidden by default, fades in and moves up on hover */}
            <p className="text-white text-md xl:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              Learn More about our Matric/Intermediate Program
            </p>
          </div>
        </div>

        {/* Advanced Placement Program */}
        <div
          className="group hover:cursor-pointer relative h-[320px] xl:h-[720px] xl:w-1/3 bg-cover bg-center rounded-xl hover:bg-black/30 hover:bg-blend-multiply xl:hover:w-1/2 transition-all duration-700"
          style={{ backgroundImage: `url('/assets/ac3.jpeg')` }}
          onClick={() => navigateToProgram('/academics/advanced-placement')}
        >
          {/* Black Overlay */}
          <div className="absolute hover:cursor-pointer bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>

          {/* Content */}
          <div className="absolute -bottom-5 gap-1 left-5 flex flex-col  transition-all duration-700 group-hover:bottom-10">
            {/* First <p>: Always visible, moves up on hover */}
            <p className="text-white text-xl xl:text-2xl">Advanced Placement Program</p>

            {/* Second <p>: Hidden by default, fades in and moves up on hover */}
            <p className="text-white text-md xl:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              Learn More about our Advanced Placement Program
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramStreams;