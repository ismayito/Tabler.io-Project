import Link from 'next/link'
import React from 'react'
import tw from "twin.macro"
import {BiHome} from "react-icons/bi"
import { IconPackage } from '@tabler/icons';
import {RiArrowDropDownLine} from "react-icons/ri"
import { IconCheckbox } from '@tabler/icons';
import { IconStar } from '@tabler/icons';
import { IconLayout } from '@tabler/icons';
import { IconGhost } from '@tabler/icons';
import { IconLifebuoy } from '@tabler/icons';
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Div1>
         <Link href='/' className='flex 
        dark:hover:text-white
        text-slate-900
        dark:text-white
          border-b-2 text-base
        border-blue-600 
          items-center
          cursor-pointer
          md:max-[991px]:text-sm
          py-3 gap-1'>
            <BiHome size={20} className='md:max-[992px]:hidden text-gray-500 mr-1'></BiHome> Home
         </Link>
         <Div2>
           <IconPackage size={20} className="inline-block md:max-[992px]:hidden   text-gray-500  text-base"></IconPackage> Interface
           <RiArrowDropDownLine size={20} className="  text-gray-500 text-sm"></RiArrowDropDownLine>
         </Div2>
         <Link  href='/'  className='flex mt-1
                 ml-1 items-center  dark:hover:text-white  md:max-[991px]:text-sm dark:text-white cursor-pointer pb-2 gap-1 text-slate-900'>
            <IconCheckbox size={20} className='text-gray-500 mr-1 md:max-[991px]:hidden'></IconCheckbox> Form Elements
         </Link>
         <div className='flex   dark:hover:text-white  md:max-[991px]:text-sm dark:text-white justify-between ml-1 mt-1 items-center gap-1 cursor-pointer pb-2'>
           <div><IconStar size={20} className="inline-block md:max-[991px]:hidden text-gray-500 mr-1"></IconStar> Extra</div>
           <RiArrowDropDownLine size={20} className="text-gray-500 text-sm"></RiArrowDropDownLine>
         </div>
         <div className='flex justify-between  dark:hover:text-white  md:max-[991px]:text-sm dark:text-white  mt-1 ml-1 items-center gap-1 cursor-pointer pb-2'>
           <div><IconLayout size={20} className="md:max-[993px]:hidden inline-block text-gray-500 mr-1"></IconLayout>Layout</div>
           <RiArrowDropDownLine size={20} className="text-gray-500 text-sm"></RiArrowDropDownLine>
         </div>
         <Link  href='/'  className='flex mt-1
                 ml-1 items-center   dark:hover:text-white   md:max-[991px]:text-sm dark:text-white  cursor-pointer pb-2 gap-1 text-slate-900'>
            <IconGhost size={20} className=' md:max-[993px]:hidden text-gray-500 mr-1'></IconGhost> 2979 icons
         </Link>
         <div className='flex justify-between   dark:hover:text-white md:max-[991px]:text-sm dark:text-white ml-1 items-center gap-1 cursor-pointer pb-2'>
           <div><IconLifebuoy size={20} className="inline-block md:max-[993px]:hidden mr-1 text-gray-500"></IconLifebuoy>Help</div>
           <RiArrowDropDownLine size={15} className="text-gray-500 text-sm"></RiArrowDropDownLine>
         </div>
        </Div1>
        <form className='flex  items-center ml-0 mr-1 md:mt-2 md:mb-1'>
            <AiOutlineSearch  size={20} className='absolute  text-center text-base ml-2 mr-1 text-gray-500' ></AiOutlineSearch>
            <Input type="text" placeholder="Search..." />
        </form>
      </Nav>
    </div>
  )
}
export default Navbar;

const Nav=tw.nav`
lg:flex
xl:flex
md:max-[1067px]:grid
md:max-lg:flex
md:max-[998px]:flex
md:max-[861px]:grid
bg-white
dark:bg-[#1a2234]
 justify-between 
 lg:px-14
 xl:px-28
 md:max-md:px-2
 hidden
 h-auto 
 w-full 
 border-b-[1px]
border-gray-200
dark:border-[#243049]
`
const Div1=tw.div`
flex
sm:max-w-md
md:max-w-full
lg:max-w-full
xl:max-w-5xl
gap-3
items-center
`

const Div2=tw.div`
flex  
ml-1 
items-center
md:max-w-md
w-auto
md:max-[991px]:text-sm
gap-1 
dark:hover:text-white 
text-slate-900 
dark:text-gray-200 
cursor-pointer
`
const Input=tw.input `
pl-8 
text-base 
py-1
h-auto 
lg:max-w-[250px]
md:max-w-[400px]
sm:max-w-[180px]
mr-1
dark:border-[#243049]
border
border-gray-300
dark:bg-[#1a2234]
rounded 
focus:ring
focus:ring-blue-100
dark:focus:ring-[#206bc4]
focus:outline-none
`
