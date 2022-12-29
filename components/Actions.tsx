import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import tw from 'twin.macro';
import { IconChevronDown } from '@tabler/icons';

function Actions() {
  return (

    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 ">
            <Links href="#">Actions <IconChevronDown className='inline-block' size={10}/></Links>
          </Menu.Button>
        </div>
        <Menu.Items className="absolute 
        right-3 w-40 origin-top-right  
        text-sm text-gray-700 
        border justify-center
        top-[51px]
      border-gray-100
      dark:bg-[#1a2234]
      dark:text-white
      dark:border-[#243049]
        rounded-md bg-white 
        z-50 shadow-lg">
        <div className='flex flex-col'>
        <Menu.Item >
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= "/"
            >
              Action
            </Link>
          )}
        </Menu.Item>
        <Menu.Item >
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= "/"
            >
              Another action
            </Link>
          )}
        </Menu.Item>
        </div>
        </Menu.Items>
    </Menu>   
  )
}

export default Actions;
const Links=tw.a`
border
 border-gray-200
dark:border-[#243049]
py-[7px]
px-4
rounded-md
hover:border-blue-500
`

