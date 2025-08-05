import { InstagramFill } from 'akar-icons'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full lg:px-28 px-0 md:px-14 flex-col sm:flex-row'>

      <div className='flex items-center justify-between bottom-0 w-full h-[55px] lg:h-[73px] bg-black/40 rounded-none md:rounded-t-lg px-3 sm:px-5 text-white'>

        <div className='flex items-center justify-center text-lg md:text-3xl gap-x-0.5 font-almarai'>
          کافه ایوان
        </div>

        <div className='flex flex-row-reverse gap-x-0.5 sm:gap-x-1.5 items-center justify-center sm:-mr-4'>

          <p className='text-[8px] sm:text-sm'>
            طراحی توسط
          </p>

          <a href='https://fastback2499.github.io/' aria-label='Developer' target='_blank' rel="noreferrer" className=' text-[8px] sm:text-sm font-semibold hover:scale-105 hover:text-black/60 transition-all duration-300'>
             رهام اسماعیلی
          </a>

        </div>

        <div className='flex items-center justify-center gap-x-5 pr-2'>
    
          <a href='https://www.instagram.com/eivan.cafe?igsh=cTh1MGZ1ZGx1NjA3' aria-label='Instagram'  target='_blank' rel="noreferrer" className='flex items-center justify-center hover:scale-110 hover:text-black/60 transition-all duration-300 gap-y-[1px] flex-col-reverse sm:flex-row sm:gap-x-1.5'>

            <p className='text-[8px] sm:text-sm font-mono'>
              @eivan.cafe
            </p>

            <InstagramFill strokeWidth={2} size={30} />

          </a>

        </div>

      </div>

      {/* <div className='flex sm:hidden border-t-2 bg-black/40 w-full text-white border-white/50 flex-row-reverse gap-x-1.5 items-center justify-center py-3'>

        <p className='text-[8px]'>
          طراحی و اجرا شده توسط
        </p>

        <a href='https://fastback2499.github.io/' aria-label='Developer' target='_blank' rel="noreferrer" className=' text-[8px] font-semibold hover:scale-105 hover:text-black/60 transition-all duration-300'>
            رهام اسماعیلی
        </a>

      </div> */}

    </footer>

  )
}

export default Footer
