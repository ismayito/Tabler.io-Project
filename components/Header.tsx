import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import tw from 'twin.macro';
import Navbar from './Navbar';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import Profile from './Profile';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiHome } from 'react-icons/bi';
import { IconPackage } from '@tabler/icons';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IconCheckbox } from '@tabler/icons';
import { IconStar } from '@tabler/icons';
import { IconLayout } from '@tabler/icons';
import { IconGhost } from '@tabler/icons';
import { IconLifebuoy } from '@tabler/icons';
import { AiOutlineClose } from 'react-icons/ai';
import Notifications from './Notifications';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* Navbar web view */}
      <Head>
        <Link href="/" className="dark:block hidden mt-2 dark:text-white">
          {' '}
          <Image
            src="/logo-white.svg"
            alt="profile-img"
            width={110}
            height={32}
          ></Image>
        </Link>
        <Link href="/" className=" dark:hidden mt-2 dark:text-white">
          {' '}
          <Image
            src="/logo.svg"
            alt="profile-img"
            width={110}
            height={32}
          ></Image>
        </Link>
        <div className="flex items-center justify-center mt-1">
          <div className="flex gap-2">
            <Link
              href="/"
              className="border dark:border-[#243049] border-gray-200 py-1 px-3 rounded"
            >
              <FiGithub size={15} className="inline-block"></FiGithub> Source
              code
            </Link>
            <Link
              href="/"
              className="border dark:border-[#243049] border-gray-200 py-1 px-3 rounded"
            >
              <AiOutlineHeart
                size={16}
                className="inline-block text-red-400"
              ></AiOutlineHeart>{' '}
              Sponsor
            </Link>
          </div>
          <div className="flex gap-3 ml-5">
            <ThemeSwitcher></ThemeSwitcher>
            <Notifications></Notifications>
          </div>
          <div className="flex ml-4 cursor-pointer">
            <Profile></Profile>
          </div>
        </div>
      </Head>
      <Navbar></Navbar>
      {/*Navbar mobile view  */}
      <nav className="md:hidden bg-white w-full dark:text-white dark:bg-[#1a2234] ">
        <div className="flex justify-between items-center py-4 px-2 w-full pb-1 border-b dark:border-[#243049] border-gray-200">
          <div onClick={handleNav}>
            {nav ? (
              <AiOutlineClose size={25} className="text-sm font-semibold" />
            ) : (
              <RxHamburgerMenu size={25} className="text-sm font-semibold" />
            )}
          </div>
          <Link href="/" className="dark:block hidden mt-1 dark:text-white">
            {' '}
            <Image
              src="/logo-white.svg"
              alt="profile-img"
              width={110}
              height={32}
            ></Image>
          </Link>
          <Link href="/" className="dark:hidden mt-1">
            <Image
              src="/logo.svg"
              alt="profile-img"
              width={110}
              height={32}
            ></Image>
          </Link>
          <Profile></Profile>
        </div>
        <div
          onClick={handleNav}
          className={
            nav
              ? 'flex  z-30 flex-col w-full mt-2 pl-2 border-b left-0 bg-white border-gray-200 pb-1 absolute'
              : 'absolute left-[-100%]'
          }
        >
          <form
            onClick={(e) => e.stopPropagation()}
            className="flex w-full items-center ml-0 mr-1"
          >
            <AiOutlineSearch
              size={20}
              className="absolute text-center ml-2 mr-1 text-gray-500"
            ></AiOutlineSearch>
            <Input type="text" placeholder="Search..." className="" />
          </form>
          <div onClick={(e) => e.stopPropagation()} className="ml-1">
            <Link
              href="/"
              className="flex  w-full items-center cursor-pointer py-2 gap-1 text-slate-900"
            >
              <BiHome className="text-gray-500 mr-1"></BiHome> Home
            </Link>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex justify-between ml-1 items-center gap-1 cursor-pointer pb-2"
          >
            <div>
              <IconPackage
                size={18}
                className="inline-block text-gray-500 mr-1"
              ></IconPackage>{' '}
              Interface
            </div>
            <RiArrowDropDownLine
              size={20}
              className="text-gray-500 text-sm"
            ></RiArrowDropDownLine>
          </div>
          <Link
            href="/"
            onClick={(e) => e.stopPropagation()}
            className="flex w-full ml-1 items-center cursor-pointer pb-2 gap-1 text-slate-900"
          >
            <IconCheckbox
              size={15}
              className="text-gray-500 mr-1"
            ></IconCheckbox>{' '}
            Form Elements
          </Link>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex justify-between ml-1 items-center gap-1 cursor-pointer pb-2"
          >
            <div>
              <IconStar
                size={15}
                className="inline-block text-gray-500 mr-1"
              ></IconStar>{' '}
              Extra
            </div>
            <RiArrowDropDownLine
              size={20}
              className="text-gray-500 text-sm"
            ></RiArrowDropDownLine>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex justify-between ml-1 items-center gap-1 cursor-pointer pb-2"
          >
            <div>
              <IconLayout
                size={20}
                className="inline-block text-gray-500 mr-1"
              ></IconLayout>
              Layout
            </div>
            <RiArrowDropDownLine
              size={20}
              className="text-gray-500 text-sm"
            ></RiArrowDropDownLine>
          </div>
          <Link
            href="/"
            onClick={(e) => e.stopPropagation()}
            className="flex w-full ml-1 items-center cursor-pointer pb-2 gap-1 text-slate-900"
          >
            <IconGhost size={18} className="text-gray-500 mr-1"></IconGhost>{' '}
            2979 icons
          </Link>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex justify-between ml-1 items-center gap-1 cursor-pointer pb-2"
          >
            <div>
              <IconLifebuoy
                size={20}
                className="inline-block mr-1 text-gray-500"
              ></IconLifebuoy>
              Help
            </div>
            <RiArrowDropDownLine
              size={15}
              className="text-gray-500 text-sm"
            ></RiArrowDropDownLine>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
const Head = tw.header`
  md:flex
 bg-white
 dark:bg-[#1a2234]
  justify-between
  lg:px-14
  xl:px-28
  md:max-md:px-2
  hidden
  h-auto 
  w-full 
  pb-1 
  border-b-[1px]
border-gray-200
dark:border-[#243049]
`;
const Input = tw.input`
pl-8 
text-sm 
py-2 
h-auto 
w-full
mr-1
border
border-gray-300
rounded 
focus:ring
focus:ring-blue-200
focus:outline-none
`;
