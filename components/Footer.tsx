import Image from 'next/image'
import React from 'react'
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (

    <div className='w-full flex bg-background flex-col items-center'>
        <div className='w-[80%] flex justify-between gap-10'>
            <div className="h-64 w-64 relative">
            <Image 
                src="/download (1).png" 
                alt="ISTE NITK Logo" 
                className="object-contain brightness-0 invert" 
                fill
                priority 
            />
            </div>
            <div className='mt-12'>
                <p>Quick Access</p>
                <div className='flex text-base mt-4 gap-0.5 text-gray-400 flex-col'>
                    <a href='#home' className='hover:text-primary'>Home</a>
                    <a href='#about' className='hover:text-primary'>About</a>
                    <a href='#sigs' className='hover:text-primary'>Sigs</a>
                    <a href='#events' className='hover:text-primary'>Events</a>
                    <p>Members</p>
                </div>

            </div>

            <div className='mt-12 flex items-center flex-col'>
                <p>Sigs</p>
                <div className='flex gap-5 mt-4 text-gray-400 text-base'>
                    <div className='flex flex-col underline items-center'>
                        <p className='cursor-pointer'>Chronicle</p>
                        <p className='cursor-pointer'>Catalyst</p>
                        <p className='cursor-pointer'>Charge</p>
                        <p className='cursor-pointer'>Clutch</p>
                    </div>
                        
                    <div className='flex flex-col underline items-center'>
                        <p className='cursor-pointer'>Concrete</p>
                        <p className='cursor-pointer'>Create</p>
                        <p className='cursor-pointer'>Credit</p>
                        <p className='cursor-pointer'>Crypt</p>
                    </div>
                </div>
                    
            </div>

            <div className='flex gap-5 pr-10 flex-col mt-12 items-center '>
                <p className='text-base font-semibold'>Contact Us</p>
                <div className='flex gap-3 text-2xl items-center justify-center '>
                    <a href='https://www.linkedin.com/company/istenitk/' target="_blank"><PiLinkedinLogoFill /></a>
                    <a href='https://www.instagram.com/istenitk' target='_blank'><PiInstagramLogoFill /></a>
                </div>
                <div className='flex gap-2 items-center text-2xl'><MdEmail /><p>: </p><p className='underline text-base italic font-semibold text-gray-400'>iste@nitk.edu.in</p></div>
            </div>
        </div>
        <div className='flex w-full justify-end'>
            <p className='text-gray-500 text-sm pr-2'>Copyright © 2026. All right reserved</p>
        </div>
    </div>

  )
}

export default Footer