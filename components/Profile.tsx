import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import tw from 'twin.macro';

const Design= tw.p`
text-gray-500
 text-[12px] 
 hidden
 md:max-sm:hidden 
lg:block xl:block
`
const Name=tw.p`
hidden 
md:max-md:hidden
lg:block xl:block
`
function Profile() {
    const items = [
        {name:"Status", url: "/"},
        {name:"Profile", url: '/'},
        {name:"Feedback", url:'/'},
        {name:"Settings", url:"/Settings"},
        {name:"LogOut", url:"/LogOut"},
    ]
  return (
    <Menu>
      <Menu.Button className="flex z-50">
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
      divide-y
      dark:border-[#243049]
      dark:divide-[#243049]
    divide-gray-100
     rounded-md bg-white shadow-lg">
        {
            items.map(item=>(
                <Menu.Item  key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50 dark:bg-[#1a2234]'} text-base w-full rounded-m p-2`}
              href= {item.url}
            >
              {item.name}
            </Link>
          )}
        </Menu.Item>
            ))
        }
      </Menu.Items>
    </Menu>
  )
}

export default Profile;