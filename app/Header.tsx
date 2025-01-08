import React from 'react'
import Link from 'next/link'
import ShibleeLogo from '@/public/assets/shibleelogo.svg'; 
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-5 font-sans font-light relative z-20">
      <Link href="/#">
      <ShibleeLogo className="w-[70px] h-[50px]" aria-label="Shiblee Logo" />
      </Link>

      <nav className="flex gap-6">
        <div className="relative group">
          <Link href="/" className="px-3 py-2 text-2xl hover:text-primary">
            Home
          </Link>
        </div>

        <div className="relative group">
          <span className="px-3 py-2 text-2xl hover:text-primary cursor-pointer">
            Academics
          </span>
          <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2 z-30">
            <Link href="/academics/o-a-levels-program" className="block px-4 py-2 text-2xl hover:bg-gray-100">
              O/A Levels Program
            </Link>
            <Link href="/academics/matric-intermediate" className="block px-4 py-2 text-2xl hover:bg-gray-100">
              Matric/Intermediate Program
            </Link>
            <Link href="/academics/advanced-placement" className="block px-4 py-2 text-2xl hover:bg-gray-100">
              Advanced Placement
            </Link>
          </div>
        </div>

        <div className="relative group">
          <span className="px-3 py-2 text-2xl hover:text-primary cursor-pointer">
            About
          </span>
          <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2 z-30">
            <Link href="/about" className="block px-4 py-2 text-2xl hover:bg-gray-100">
              About Us
            </Link>
            <Link href="/about/mission-and-vision" className="block px-4 py-2 text-2xl hover:bg-gray-100">
              Mission and Vision
            </Link>
            <Link href="/shucp" className="block px-4 py-2 text-2xl hover:bg-gray-100">
              SHUCP
            </Link>
          </div>
        </div>

        <div className="relative group">
          <Link href="/admissions" className="px-3 py-2 text-2xl hover:text-primary">
            Admissions
          </Link>
        </div>
      </nav>

      <Link href="/contact">
        <Button variant="default" className="text-2xl font-sans font-light p-5 bg-shockingblue hover:bg-shockingblue/90 text-white">
          Contact Us
        </Button>
      </Link>
    </div>
  )
}

export default Header
