import { InstagramFill } from 'akar-icons'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full lg:px-28 px-0 md:px-14'>

      <div className='flex items-center justify-between bottom-0 w-full h-[55px] lg:h-[73px] bg-black/40 rounded-none md:rounded-t-lg px-5 text-white'>

        <div className='flex items-center justify-center text-lg md:text-3xl gap-x-0.5 font-almarai'>
          کافه ایوان
        </div>

        <div className='hidden sm:flex flex-row-reverse gap-x-1.5 items-center justify-center ml-10'>
          <p className='text-sm'>
            طراحی شده توسط
          </p>

          <a href='https://fastback2499.github.io/' aria-label='Developer' target='_blank' rel="noreferrer" className=' text-sm font-semibold hover:scale-105 hover:text-black/60 transition-all duration-300'>
             رهام اسماعیلی
          </a>
        </div>

        <div className='flex items-center justify-center gap-x-5 pr-2'>
    
          <a href='https://www.instagram.com/eivan.cafe?igsh=cTh1MGZ1ZGx1NjA3' aria-label='Instagram'  target='_blank' rel="noreferrer" className=' hover:scale-110 hover:text-black/60 transition-all duration-300'>

            <InstagramFill strokeWidth={2} size={30} />

          </a>

        </div>

      </div>

    </footer>

  )
}

export default Footer