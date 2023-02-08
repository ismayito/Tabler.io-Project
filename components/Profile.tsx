import { Menu } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import React,{useState,useEffect} from 'react'
import { IconUserPlus } from "@tabler/icons";
import tw from "twin.macro";
import Router from "next/router";
import { removeFromStorage } from "../pages/src/utils";
import { auth } from "./Firebase ";
import { signOut } from "firebase/auth";
import { getFromStorage } from "../pages/src/utils";
import LoggedInUsers from "./LoggedInUsers";

function Profile() {
   let user;
   let email:any;
   let tokens;
   let token;
   let index;
   const [loggeduser,setLoggedUser]= useState(email);
   const [accessToken,setAccessToken]= useState("");
   useEffect(()=>{
    user=getFromStorage("users")|| [];
    tokens=getFromStorage("accessToken")|| [];
    token=tokens[0]
    email=user[0]?.email;
    setLoggedUser(email);
    setAccessToken(token);
   },[])
   const LogOut = () => {
    signOut(auth)
      .then(() => {
        removeFromStorage("users");
        removeFromStorage("accessToken");
        removeFromStorage("usersId");
        Router.replace("/login");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  const AnotherAcount=()=>{
    if(accessToken) {
      Router.replace("/login");
    }
    else{
      Router.push('/');
      alert(`user not yet logged in`)
    }
  }
  return (
    <Menu>
      <Menu.Button className="flex z-100">
        <Image
          src="/000m.jpg"
          className=" mt-1 flex inlline-block rounded-md h-8 w-8 mr-1"
          alt="profile"
          width={40}
          height={40}
        ></Image>
        <div>
          {
            loggeduser ? <Name>{loggeduser.split("@")[0]}</Name>:<Name>Pawel Kuna </Name>
          }
          <Design>UI Designer</Design>
        </div>
      </Menu.Button>
      <Menu.Items
        className="absolute z-30 dark:bg-[#1a2234] dark:text-white right-1 
      md:right-4 lg:right-28 
      xl:right-28 origin-top-right 
      top-12 text-sm text-gray-700 
      border justify-center
    border-gray-100
    dark:border-[#243049]
      w-44 flex flex-col 
      rounded-md bg-white shadow-lg"
      >
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active && "bg-gray-50 dark:bg-[#1a2234]"
              } text-base w-full rounded-m p-2`}
              href="/"
            >
              Status
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active && "bg-gray-50 dark:bg-[#1a2234]"
              } text-base w-full rounded-m p-2`}
              href="/"
            >
              Profile
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active && "bg-gray-50 dark:bg-[#1a2234]"
              } border-b border-gray-200 dark:border-[#243049]
              text-base 
              w-full 
              rounded-m p-2`}
              href="/"
            >
              Feedback
            </Link>
          )}
        </Menu.Item>
        <Menu.Item key={Date.now()}>
          {({ active }) => (
            <Link
              className={`${
                active && "bg-gray-50 dark:bg-[#1a2234]"
              } text-base w-full rounded-m p-2`}
              href="/Settings"
            >
              Settings
            </Link>
          )}
        </Menu.Item>
        <Menu.Item key={Date.now()}>
          {({ active }) => (
            <button
              className={`${
                active && "bg-gray-50 dark:bg-[#1a2234]"
              } text-base w-full rounded-m p-2 text-start inline-block`}
              
            >
              <LoggedInUsers></LoggedInUsers>
            </button>
          )}
        </Menu.Item>
        <Menu.Item key={Date.now()}>
          {({ active }) => (
            <button onClick={AnotherAcount}
              className={`${
                active && "bg-gray-50 dark:bg-[#1a2234]"
              } text-base w-full rounded-m p-2 text-start inline-block`}
              
            >
              <span className="inline-block">
                <IconUserPlus></IconUserPlus>
              </span>
              Add another account
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={LogOut}
              className={`${
                active && "bg-gray-50 dark:bg-[#1a2234]"
              }  text-left text-base w-full rounded-m p-2`}
            >
              LogOut
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Profile;

const Design = tw.p`
text-gray-500
 text-[12px] 
 hidden
 md:max-md:block
 lg:block 
`;
const Name = tw.p`
 hidden 
 md:max-md:block
 lg:block
`;
