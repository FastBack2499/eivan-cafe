import { coldCafeItems } from '../data/coldCafeItems';
import { coldDrinkItems } from '../data/coldDrinkItems';
import { hotCafeItems } from '../data/hotCafeItems';
import { matchaItems } from '../data/matchaItems';
import { hotDrinkItems } from '../data/hotDrinkItems';
import { teeItems } from '../data/teeItems';
import { cakeItems } from '../data/cakeItems';
import Element from '../lib/Element'
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <main className='flex items-center justify-center flex-col px-5 mt-[220px] gap-y-5 pb-5 sm:pb-14 pt-3'>

      <Element name='hotcafe' className='flex flex-col items-center justify-center gap-y-3 w-full'>

          <div className='flex items-center justify-center py-1 px-4 rounded-full bg-black/5'>

            <h2 className='font-semibold'>
              بارگرم اسپرسو
            </h2>

          </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
          {hotCafeItems.map((item) => (
            <MenuCard key={item.id} title={item.title} description={item.description} picture={item.picture} price={item.price} prices={item.prices}/>
          ))}
        </div>

      </Element>

      <Element name='coldcafe' className='flex flex-col items-center justify-center gap-y-3 w-full'>

          <div className='flex items-center justify-center py-1 px-4 rounded-full bg-black/5'>

            <h2 className='font-semibold'>
              بارسرد اسپرسو
            </h2>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
          {coldCafeItems.map((item) => (
            <MenuCard key={item.id} title={item.title} description={item.description} picture={item.picture} price={item.price} prices={item.prices}/>
          ))}
        </div>

      </Element>

      <Element name='matcha' className='flex flex-col items-center justify-center gap-y-3'>

        <div className='flex items-center justify-center py-1 px-4 rounded-full bg-black/5'>

            <h2 className='font-semibold'>
              ماچا بار
            </h2>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
          {matchaItems.map((item) => (
            <MenuCard key={item.id} title={item.title} description={item.description} picture={item.picture} price={item.price} prices={item.prices}/>
          ))}
        </div>

      </Element>

      <Element name='hotdrink' className='flex flex-col items-center justify-center gap-y-3'>

        <div className='flex items-center justify-center py-1 px-4 rounded-full bg-black/5'>

            <h2 className='font-semibold'>
              نوشیدنی گرم
            </h2>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
          {hotDrinkItems.map((item) => (
            <MenuCard key={item.id} title={item.title} description={item.description} picture={item.picture} price={item.price} prices={item.prices}/>
          ))}
        </div>

      </Element>

      <Element name='colddrink' className='flex flex-col items-center justify-center gap-y-3'>

        <div className='flex items-center justify-center py-1 px-4 rounded-full bg-black/5'>

            <h2 className='font-semibold'>
              نوشیدنی سرد
            </h2>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
          {coldDrinkItems.map((item) => (
            <MenuCard key={item.id} title={item.title} description={item.description} picture={item.picture} price={item.price} prices={item.prices}/>
          ))}
        </div>

      </Element>

      <Element name='tee' className='flex flex-col items-center justify-center gap-y-3'>

        <div className='flex items-center justify-center py-1 px-4 rounded-full bg-black/5'>

            <h2 className='font-semibold'>
              چایی و دمنوش
            </h2>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
          {teeItems.map((item) => (
            <MenuCard key={item.id} title={item.title} description={item.description} picture={item.picture} price={item.price} prices={item.prices}/>
          ))}
        </div>

      </Element>

      <Element name='cake' className='flex flex-col items-center justify-center gap-y-3'>

        <div className='flex items-center justify-center py-1 px-4 rounded-full bg-black/5'>

            <h2 className='font-semibold'>
              کیک و کوکی
            </h2>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
          {cakeItems.map((item) => (
            <MenuCard key={item.id} title={item.title} description={item.description} picture={item.picture} price={item.price} prices={item.prices}/>
          ))}
        </div>

      </Element>

    </main>
  )
}

export default Menu






