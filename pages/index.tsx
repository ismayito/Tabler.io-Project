import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import tw from 'twin.macro'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import SalesCard from '../components/SalesCard'
import Cards from '../components/Cards'
import SocialsCard from '../components/SocialsCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tabler.io Dashboard</title>
        <meta name="description" content="developed and designed by mayito ismail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Dashboard></Dashboard>   
      <DashBoardBody>
        <Cards></Cards>
        <SocialsCard></SocialsCard>
      </DashBoardBody>  
    </div>
  )
}

const DashBoardBody=tw.div`
lg:px-14
xl:px-28
md:max-md:px-2
dark:bg-[#1a2234]
h-auto 
w-full
py-5
`