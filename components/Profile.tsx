import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import tw from 'twin.macro';


function Profile() {
  return (
    <Menu>
      <Menu.Button className="flex z-100">
               <Image src="/profile icon.png" className='flex inlline-block rounded-md h-8 w-8 mr-1'  alt="profile" width={40} height={40}></Image> 
              <div>
                  <Name>Pawel Kuna </Name>
                  <Design>UI Designer</Design>
                </div>
      </Menu.Button>
      <Menu.Items className="absolute dark:bg-[#1a2234] dark:text-white right-1 
      md:right-4 lg:right-28 
      xl:right-28 origin-top-right 
      top-12 text-sm text-gray-700 
      border justify-center
     border-gray-100
      w-44 flex flex-col 
     rounded-md bg-white shadow-lg">
        <Menu.Item  key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= "/"
            >
              Status
            </Link>
          )}
        </Menu.Item>
        <Menu.Item  key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= "/"
            >
              Profile
            </Link>
          )}
        </Menu.Item>
        <Menu.Item  key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} border-b border-gray-200 dark:border-[#243049]
              text-base 
              w-full 
              rounded-m p-2`}
              href= "/"
            >
              Feedback
            </Link>
          )}
        </Menu.Item>
        <Menu.Item  key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= "/Settings"
            >
              Settings
            </Link>
          )}
        </Menu.Item>
        <Menu.Item  key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= "/login"
            >
              LogOut
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Profile;

const Design= tw.p`
text-gray-500
 text-[12px] 
 hidden
 md:max-md:block
 lg:block 
`
const Name=tw.p`
hidden 
md:max-md:block
lg:block
`