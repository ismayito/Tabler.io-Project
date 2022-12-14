import React from 'react';
import { Menu } from '@headlessui/react';
import {BiRadioCircle} from "react-icons/bi"
import { IconStar } from '@tabler/icons';
import Link from 'next/link';
import {IoMdNotificationsOutline} from "react-icons/io"

 const Notifications = () => {
  return (
    <Menu>
    <Menu.Button className="flex relative gap-0">
        <IoMdNotificationsOutline size={20}></IoMdNotificationsOutline>
        <BiRadioCircle size={8} 
        className="bg-red-500 mt-[-6px] ml-0 rounded-full text-red-500">
        </BiRadioCircle>
    </Menu.Button>
    <Menu.Items className="absolute top-12 origin-top-right text-sm
     text-gray-700 md:right-16 lg:right-60 border justify-center
      border-gray-100 w-auto flex flex-col  divide-y dark:divide-[#243049] divide-gray-200 
      rounded-sm bg-white shadow-lg dark:bg-[#1a2234] dark:border-[#243049]">
       <Menu.Item>
        {({ active }) => (
          <p
            className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} dark:text-white w-full pl-5 rounded-m  py-4 text-base text-gray-800 font-medium`} 
          >
          Last Updates 
          </p>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
         <div
            className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'}  pl-4 flex flex-col h-auto py-3 items-start w-full rounded-m px-2`} 
          >
            <div className='flex'>
              <div className='inline-block pt-4'>
              <BiRadioCircle  
                className='text-red-900  bg-red-900 animate-ping h-[5px] w-[5px] inline-block rounded-full'>
              </BiRadioCircle>  
              </div>
            <div className='flex flex-col pl-1'> 
              <Link href="#" className='hover:underline text-base dark:text-white'>Example 1</Link>
              <p className='text-gray-500 text-base ml-1'>Change deprecated html tags to text decoration classes ...
               <span className='opacity-0 hover:opacity-100'> <IconStar size={20} className=" inline-block ml-[75px]  text-gray-300" ></IconStar></span> </p>
            </div>
            </div>
          </div>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
         <div
            className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} pl-4 flex flex-col py-3 items-start w-full rounded-m px-4`} 
          >
            <div className='flex'>
              <div className='inline-block pt-4'>
              <BiRadioCircle  
                className='text-gray-500  bg-gray-500 h-2 w-2 inline-block rounded-full'>
              </BiRadioCircle>  
              </div>
            <div className='flex flex-col pl-1'> 
              <Link href="#" className='hover:underline text-base dark:text-white'>Example 2</Link>
              <p className='text-gray-500 text-base ml-1'>justify-content:between ⇒ justify-content:space-betwee... (#29734)
               <span> <IconStar size={20} className=" inline-block ml-3 text-yellow-400 visible" ></IconStar></span> </p>
            </div>
            </div>
          </div>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
         <div
            className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} pl-4 flex flex-col py-3 items-start w-full rounded-m px-2`} 
          >
            <div className='flex'>
              <div className='inline-block pt-4'>
              <BiRadioCircle  
                className='text-gray-500  bg-gray-500 h-2 w-2 inline-block rounded-full'>
              </BiRadioCircle>  
              </div>
            <div className='flex flex-col pl-1'> 
              <Link href="#" className=' text-base hover:underline dark:text-white'>Example 3</Link>
              <p className='text-gray-500 ml-1 text-base'>Update change-version.js (#29736)
               <span className='ml-60 opacity-0 hover:opacity-100'> <IconStar size={20} className="inline-block text-gray-300" ></IconStar></span> </p>
            </div>
            </div>
          </div>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
         <div
            className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} pl-4 flex flex-col py-3 items-start w-full rounded-m px-2`} 
          >
            <div className='flex'>
              <div className='inline-block pt-4'>
              <BiRadioCircle  
                className='text-green-700  bg-green-700 animate-ping h-[5px] w-[5px] inline-block rounded-full'>
              </BiRadioCircle>  
              </div>
            <div className='flex flex-col pl-1'> 
              <Link href="#" className='hover:underline text-base dark:text-white'>Example 4</Link>
              <p className='text-gray-500 text-base ml-1'>Regenerate package-lock.json(#29730)
               <span className="ml-[212px] opacity-0 hover:opacity-100"> <IconStar size={20} className="inline-block text-gray-300" ></IconStar></span> </p>
            </div>
            </div>
          </div>
        )}
      </Menu.Item>
    </Menu.Items>
  </Menu>
  )
}
export default Notifications;