import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'

const page = () => {
  return (

      <PageLoader>

        <div className='flex items-center justify-center flex-col w-full font-vazir bg-orange-300/20'>

          <Navbar/>
          <Menu/>
          <Footer/>
          
        </div>

      </PageLoader>

  )
}

export default page
