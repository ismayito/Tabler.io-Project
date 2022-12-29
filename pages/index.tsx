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
import TrafficChart from '../components/Charts/TrafficChart'
import Traffic from '../components/Traffic'
import dynamic from 'next/dynamic'; 
import StorageProgressBar from '../components/StorageProgressBar'
import Posts from '../components/Posts'
import { DevelopmentActivity } from '../components/DevelopmentActivity'
import TablerIcons from '../components/TablerIcons'
import VisitedPages from '../components/VisitedPages'
import Sponsor from '../components/Sponsor'
import SocialMedia from '../components/SocialMedia'
import Tasks from '../components/Tasks'
import Invoices from '../components/Invoices'
import Footer from '../components/Footer'
const Map = dynamic(() => import('../components/Charts/Map'), { ssr: false });
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
        <DivTraffic>
          <Traffic></Traffic>
          <Map></Map>
        </DivTraffic>
        <DivDevelopmentActivityCard>
          <DivStoragePost>
           <StorageProgressBar></StorageProgressBar>
           <Posts></Posts>
          </DivStoragePost>
          <DevelopmentActivity></DevelopmentActivity>
        </DivDevelopmentActivityCard>
        <TablerIcons></TablerIcons>
        <DivPages>
          <div className='col-span-2 '>
          <VisitedPages></VisitedPages>
          </div>
          <Sponsor></Sponsor>
          <SocialMedia></SocialMedia>
          <Tasks></Tasks> 
        </DivPages>
       <Invoices></Invoices>
       <Footer></Footer>  
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
const DivTraffic=tw.div`
lg:grid
lg:grid-cols-2
gap-4
md:grid
md:grid-cols-2
md:max-[991px]:flex
md:max-[991px]:flex-col
flex
flex-col
`
const DivStoragePost= tw.div`
flex
flex-col
`
const DivDevelopmentActivityCard= tw.div`
md:grid
md:grid-cols-2
md:max-[992px]:flex
md:max-[992px]:flex-col
flex-col
gap-4
flex 
`
const DivPages=tw.div`
md:grid
md:grid-cols-3
gap-4
md:max-[992px]:flex
md:max-[992px]:flex-col
md:max-[992px]:flex-auto

`
const SocialTasks=tw.div`
grid
grid-cols-3
gap-4
md:grid-cols-3
md:max-[992px]:flex
md:max-[992px]:flex-auto
`

