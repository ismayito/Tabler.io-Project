import React from 'react';
import { Menu } from '@headlessui/react';
import {BiRadioCircle} from "react-icons/bi"

 const Nofications = () => {
  return (
    <Menu>
    <Menu.Button className="flex">
    </Menu.Button>
    <Menu.Items className="absolute md:right-[8%] origin-top-right text-sm text-gray-700  border justify-center border-gray-100 w-44 flex flex-col divide-y divide-gray-100 rounded-md bg-white shadow-lg">
       <Menu.Item>
        {({ active }) => (
          <p
            className={`${active && 'bg-gray-50'} w-full rounded-m p-2`} 
          >
          Last Updates 
          </p>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
         <div
            className={`${active && 'bg-gray-50'} w-full rounded-m p-2`} 
          >
           <p> <BiRadioCircle  
                className='text-red-500 bg-red-500 h-2 w-2   rounded-full'>
              </BiRadioCircle>  <span>Examples 1</span>
            </p>
            <p>Change deprecated html tags </p>


          </div>


        )}
      </Menu.Item>
    </Menu.Items>
  </Menu>
  )
}

export default Nofications;