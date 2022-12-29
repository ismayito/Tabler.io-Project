
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import tw from 'twin.macro';
import {RiArrowDropDownLine} from "react-icons/ri"


function LastDays() {
  return (
    <Menu as="div" className="relative" >
     <div>
      <Menu.Button className=" z-100 flex
      hover:underline
      items-center
    text-[#616876]
      text-base">
            Last 7 days 
            <span><RiArrowDropDownLine size={20} className='inline-block'></RiArrowDropDownLine></span> 
      </Menu.Button>
      </div>  
      <Menu.Items className="
      absolute dark:bg-[#1a2234] dark:text-white 
      origin-top-right
      right-0
      z-50
      text-sm text-gray-700 
      border justify-center
    border-gray-100
    dark:border-[#243049]
      w-[184px] flex flex-col 
      rounded-md bg-white shadow-lg
      ">
       <div className='flex flex-col'> 
        <Menu.Item >
          {({ active }) => (
            <Link
              className={`${active && 'bg-blue-50 dark:bg-[#1a2234]'} text-blue-300 text-base w-full rounded-m p-2`}
              href= "/"
            >
                 Last 7 days
            </Link>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= "/"
            >
              Last 30 days
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} border-b border-gray-200 dark:border-[#243049]
              text-base 
              w-full 
              rounded-m p-2`}
              href= "/"
            >
              Last 3 Months
            </Link>
          )}
        </Menu.Item>
        </div>
    
      </Menu.Items>
    </Menu>
  )
}

export default LastDays;



