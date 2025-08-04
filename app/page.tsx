import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'

const page = () => {
  return (
      <div className='flex items-center justify-center flex-col w-full font-vazir'>
        <Navbar/>
        <Menu/>
        <Footer/>
      </div>
  )
}

export default page