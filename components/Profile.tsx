import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

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
      <Menu.Button className="flex">
                  <Image src="/profile icon.png" className=' flex inlline-block rounded h-8 w-8 mr-1'  alt="profile" width={40} height={40}></Image> 
                <div>
                  <p className='hidden md:block'>Pawel Kuna </p>
                  <p className='text-gray-500 text-[12px] font-sm hidden md:block'>UI Designer</p>
                </div>
      </Menu.Button>
      <Menu.Items className="absolute md:right-[8%] origin-top-right text-sm text-gray-700  border justify-center border-gray-100 w-44 flex flex-col divide-y divide-gray-100 rounded-md bg-white shadow-lg">
        {
            items.map(item=>(
                <Menu.Item  key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${active && 'bg-gray-50'} w-full rounded-m p-2`}
              href={item.url}
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