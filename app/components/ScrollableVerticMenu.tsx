'use client'

import { Link } from "react-scroll"

interface ScrollableMenuProps {
  scrollItems: {
    id: number,
    title: string,
    icon: string,
    link: string
  }[]
}

const ScrollableVerticMenu: React.FC<ScrollableMenuProps> = ({
  scrollItems
}) => {
  return (
    <div className="w-full overflow-x-auto bg-white/50 p-4 rounded-md shadow-md drop-shadow-md">

      <div className="flex flex-row-reverse  whitespace-nowrap">

        {scrollItems.map((item) => (

          <div key={item.id} className="pl-5">

            <Link to={item.link} href={`#${item.link}`} className="min-w-[110px] bg-white/60 p-4 rounded shadow-lg drop-shadow-lg text-center text-sm flex items-center justify-center flex-col gap-y-2 hover:scale-105 hover:text-gray-700 transition-all duration-300" smooth duration={500} offset={-225} spy={true}>

              <img src={item.icon} alt={item.link} width={60} height={60} className="object-cover"/>
              
              <p>
                {item.title}
              </p>

            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default ScrollableVerticMenu
