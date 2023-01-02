
import React,{useState} from 'react'
import tw from "twin.macro"
import Image from 'next/image'
import Link from "next/link"
import {AiOutlineEye} from 'react-icons/ai'
import { IconEye } from '@tabler/icons';
import { IconBrandGithub } from '@tabler/icons';
import { IconBrandTwitter } from '@tabler/icons';
import { auth} from '../components/Firebase '
import {createUserWithEmailAndPassword } from "firebase/auth";
import Router from 'next/router'

 const Signup = () => {
  const [email,setEmail]=useState('');
  const [password,setPassWord]= useState('');
  const [name,setName]= useState('');

const createAccount=(e:React.MouseEvent)=>{
    e.preventDefault();
    createUserWithEmailAndPassword( auth,email,password).
    then(user=>{
      if(auth){
        Router.replace('/')
      }
      console.log(user)
    }).
    catch(error=>alert(error.message));
  }
  return (
    <Div>
      <Link href='/' className='dark:hidden' passHref>
        <Logo  width={123} height={36} src="/logo.svg" alt="img-logo"/>
      </Link>
      <Link href='/' className='dark:block hidden' passHref>
        <Logo  width={123} height={36} src="/logo-white.svg" alt="img-logo"/>
      </Link>
      <LogInCard>
        <LoginForm>
         <LoginHeading>Create new account</LoginHeading>
         <form>
         <Name >Name</Name>
          <Input  
          type='text' placeholder='Enter name'
          required value={name} onChange={e=>setName(e.target.value)}
          />
          <div className='mt-2'>
         <EmailHeading>Email address</EmailHeading>
          <Input  
          type='email' placeholder='Enter email'
          required value={email} onChange={e=>setEmail(e.target.value)}
          />
          </div>
          <div className='flex justify-between mt-3'>
            <label className='text-gray-700 font-medium dark:text-white '>Password</label>
          </div>
          <div className=' relative flex justify-between'>
           <InputPassword  type='password' placeholder='your password'
            required value={password} onChange={e=>setPassWord(e.target.value)}
           />
           <IconEye size={20} className='inline-block items-center absolute right-4 top-4 text-sm text-gray-700'></IconEye>
          </div>
          <div className='flex  mt-2 gap-2'>
          <input className='mt-2 w-4 h-4 dark:bg-[#1a2234] py-1 focus:ring rounded-xl focus:ring-blue-100' type="checkbox" required />
          <p className='mt-1'>Agree the <span className='text-blue-500'>terms and policy.</span></p>
          </div>
          <Button type="submit" onClick ={createAccount} >Create new account</Button>
         </form>
        </LoginForm>
      </LogInCard>
      <Footer>
          <p className='text-gray-500'>Already have an account ?</p>
          <Link href='/login' className='text-blue-500 hover:underline underline-blue-500'>Sign in</Link>
         </Footer>
    </Div>
  )
}

export default Signup;
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
flex 
justify-center
items-center 
`
const EmailHeading=tw.label`
text-gray-700
 font-medium
dark:text-white

`
const Name=tw.label`
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