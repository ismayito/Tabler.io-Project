import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import tw from 'twin.macro';
import { IconChevronDown } from '@tabler/icons';

function Actions() {
  return (
    <Menu>
      <Menu.Button className="flex relative">
        <Links href="#">Actions <IconChevronDown className='inline-block' size={10}/></Links>
      </Menu.Button>
      <Menu.Items className="absolute dark:bg-[#1a2234] dark:text-white 
       origin-right
       w-40
       z-50
       shadow-xl
       top-14
       right-1
       md:right-4
       lg:right-12 
       xl:right-12
       text-sm text-gray-700 
       border justify-center
      border-gray-100
      dark:border-[#243049]
        flex flex-col 
        rounded-md bg-white">
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

