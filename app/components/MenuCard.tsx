import { Image as AntdImage } from 'antd'

interface MenuCardProps {
  title: string;
  description?: string;
  picture?: string;
  price?: number;
  prices?: {
    id: number,
    priceTitle: string,
    priceNum: number,
  }[]
}

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  picture,
  price,
  prices
}) => {
  return (
    <div className='flex items-center justify-center flex-wrap flex-col p-2 bg-black/15 rounded-lg gap-y-2 shadow-lg backdrop-blur-md min-w-[313.56px]'>

      <div className="flex items-start justify-between w-full text-center relative">

        <AntdImage src={picture ? picture : '/EivanCafe.jpg'} alt={title} preview={picture ? true : false} width={140} height={140} className='absolute rounded-lg right-0 p-1 '/>

        <div className='rtl flex flex-col items-start justify-center gap-y-5 text-right p-2 rounded-lg '>

          <h3 className={`font-semibold text-right text-xl `}>
            {title}
          </h3>

          { description && (
            <div className='text-xs  leading-5' dangerouslySetInnerHTML={{__html: description}}/>
          )}

          { !prices && (
            <div className='p-2 border-2 border-white rounded-md'>
              <p className='font-semibold text-sm'>
                {price} تومان
              </p>
            </div>
          )}

        </div>

      </div>

      { prices && (
        <div className='flex items-center flex-wrap justify-evenly w-full'>

          { prices?.map((item) => (
            <div key={item.id} className='flex items-center justify-evenly px-5 py-2 rtl flex-col border-2 border-white rounded-md text-sm gap-y-[1px]'>

              <p className=''>
                {item.priceTitle}
              </p>

              <div className=''/>

              <p className='font-semibold'>
                {item.priceNum} تومان
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}

export default MenuCard