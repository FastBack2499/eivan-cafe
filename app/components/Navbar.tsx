import { scrollItems } from '../data/scrollItems'
import ScrollableVerticMenu from './ScrollableVerticMenu'

const Navbar = () => {

  return (
    <nav className='flex flex-col items-center justify-center w-full pt-3 bg-orange-200/50 backdrop-blur-lg fixed z-50 top-0 gap-y-[15px]'>
      
      <div className='flex flex-row-reverse items-center justify-center w-full gap-x-1'>

        <h1 className='font-almarai text-lg font-bold'>
          کافه ایوان
        </h1>

        <img src={'EivanCafeIcon.png'} alt='Eivan Cafe' width={28} className='object-cover'/>

      </div>

      <ScrollableVerticMenu scrollItems={scrollItems}/>

    </nav>
  )
}

export default Navbar
