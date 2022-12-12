import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import tw from 'twin.macro'
import Header from '../components/Header'

const Title=styled.h1`
color: red
`
const Tail= tw.button`
bg-blue-400
hover:bg-slate-600
p-10
text-sm
text-red-800
font-bold
border
border-black
rounded
`
const Main=tw.main`
mr-3
ml-3
bg-red-300
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tabler.io Dashboard</title>
        <meta name="description" content="developed and designed by mayito ismail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>









      
      {/* <Header></Header> */}
      {/* <Main>
       <Title>heading with red</Title>
      <Tail>press me</Tail>
        
      </Main> */}

      
    </div>
  )
}
