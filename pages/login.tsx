import React from 'react'
import tw from "twin.macro"
import Image from 'next/image'
import Link from "next/link"
import {AiOutlineEye} from 'react-icons/ai'
import { IconEye } from '@tabler/icons';
import { IconBrandGithub } from '@tabler/icons';
import { IconBrandTwitter } from '@tabler/icons';

 const LogOut = () => {
  return (
    <Div>
      <Link className='dark:hidden ' href="/">
        <Logo  width={123} height={36} src="/logo.svg" alt="img-logo"/>
      </Link>
      <Link className='dark:block hidden' href="/">
        <Logo  width={123} height={36} src="/logo-white.svg" alt="img-logo"/>
      </Link>
      <LogInCard>
        <LoginForm>
         <LoginHeading>Login to your account</LoginHeading>
         <EmailHeading>Email address</EmailHeading>
         <form>
          <Input type='email' placeholder='your@email.com' required/>
          <div className='flex justify-between mt-3'>
            <label className='text-gray-700 font-medium dark:text-white '>Password</label>
            <Link className='hover:underline underline:text-[#206bc4] text-[#206bc4] ' href='/forgotpassword'>I forgot Password</Link>
          </div>
          <div className=' relative flex justify-between'>
           <InputPassword  type='password' placeholder='your password' required />
           <IconEye size={20} className='inline-block items-center absolute right-4 top-4 text-sm text-gray-700'></IconEye>
          </div>
          <div className='flex  gap-2'>
          <input className='mt-2 w-4 h-4 dark:bg-[#1a2234] py-1 focus:ring rounded-xl focus:ring-blue-100' type="checkbox" required />
          <p className='mt-1'>Remember me on this device</p>
          </div>
          <Link href='/' className=''>
          <Button type="submit" >Sign in</Button>
          </Link>
         </form>
        </LoginForm>
         <OtherSignIn>
          <hr className='w-[49%] text-gray-200 dark:border-[#243049] '/><span className='text-gray-600 dark:text-gray-400 tracking-widest'>0R</span><hr className='w-[49%] dark:border-[#243049] text-gray-200'/>
         </OtherSignIn>
         <LoginForm>
           <div className='flex gap-4 justify-center items-center'>
            <Links href='#'>
            <IconBrandGithub size={20} className='inline-block dark:text-gray-900'></IconBrandGithub>
              Login with Github
            </Links>
            <Links href='#'>
              <IconBrandTwitter size={20} className='inline-block text-blue-500'></IconBrandTwitter>
              Login with Twitter
            </Links>
           </div>
         </LoginForm>
      </LogInCard>
      <Footer>
          <p className='text-gray-500'>Do not have an account yet?</p>
          <Link href='/signup' className='text-blue-500 hover:underline underline-blue-500'>Sign up</Link>
         </Footer>
    </Div>
  )
}

export default LogOut;
const Div=tw.div`
border-t-2
border-blue-600
dark:border-blue-700
h-auto
dark:bg-[#1a2234]
min-h-full
`
const Logo= tw.img`
mt-20
mx-auto
mb-4
`
const LogInCard=tw.div`
w-[456px]
mx-auto
bg-white 
dark:bg-[#1d273b]
z-50
rounded 
border 
border-gray-200
dark:border-[#243049]
h-auto 
`
const LoginForm=tw.div`
p-10
`
const LoginHeading= tw.h2`
text-xl
dark:text-white
mb-8
text-gray-800
font-semibold 
flex 
justify-center
items-center 
`
const EmailHeading=tw.label`
text-gray-700
 font-medium
dark:text-white
`
const Input=tw.input`
w-full 
px-3
rounded
border
border-gray-200 
dark:border-[#243049]
dark:bg-[#1a2234]
focus:ring
focus:ring-blue-100
 focus:outline-none 
 py-[7px] 
 mt-1
align-middle
`
const InputPassword=tw.input`
w-full 
px-3
rounded
border
border-gray-200 
dark:border-[#243049]
dark:bg-[#1a2234]
focus:ring
focus:ring-blue-100
focus:outline-none 
py-[7px] 
mt-1
relative
align-middle
`
const Button=tw.button`
mt-8
w-full
bg-[#206bc4]
hover:bg-blue-500
dark:border-[#243049]
transform 
transition
py-2
rounded
border-none
text-white
font-medium
px-4
`
const OtherSignIn=tw.div`
flex
text-[10px]
font-semibold
items-center
gap-1
`
const Links=tw.a`
items-center
dark:text-white
flex
text-[14px] 
gap-1
text-gray-700
font-medium
py-[7px]
px-4
border
border-gray-200
dark:border-[#243049]
rounded
hover:transition-all
transform
`
const Footer=tw.div`
justify-center
mx-auto
mt-4
gap-1
flex
mb-auto
`