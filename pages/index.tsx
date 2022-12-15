import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import tw from 'twin.macro'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tabler.io Dashboard</title>
        <meta name="description" content="developed and designed by mayito ismail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard></Dashboard>      
    </div>
  )
}
