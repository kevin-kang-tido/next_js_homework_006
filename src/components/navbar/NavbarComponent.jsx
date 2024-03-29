
'use client';
import { Navbar } from 'flowbite-react';
// import IstadLogo from '../IstadLogo/IstadLogo';
import Link from 'next/link';

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className='rounded-none h-[90px]' style={{ backgroundColor: '#253C95' }}>
      <div className='w-full flex flex-wrap items-center justify-between'>
        <Navbar.Brand as={Link} href="/" className=''>
          <img src="https://istad.co/resources/img/CSTAD_120.png" alt="logo_istad" className='object-cover'width={60} height={60}  />
          <span className="self-center ml-2 text-xl  text-white font-bold  tracking-widest">CSTAD</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='p-4 font-bold mt-4 lg:mt-0 text-center'>
          <Navbar.Link href="/" className='text-white hover:text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
            Home
          </Navbar.Link>
          <Navbar.Link href="/enroll" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
            Enroll
          </Navbar.Link>
          <Navbar.Link href="/course" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
            Course
          </Navbar.Link>
          <Navbar.Link href="/new_it" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
            IT News
          </Navbar.Link>
          <Navbar.Link href="/job_opportunity" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
            Job Opportunity
          </Navbar.Link>
          <Navbar.Link href="/about_us" className='text-white text-lg font-bold block mb-4 lg:inline-block lg:mb-0 mr-4'>
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
