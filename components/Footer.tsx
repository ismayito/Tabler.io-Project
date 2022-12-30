import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { AiOutlineHeart } from "react-icons/ai";
import { IconHeart } from '@tabler/icons';

const Footer = () => {
  return (
    <Div>
        <DivCopyRight>
            <p>Copyright  <strong>&copy;</strong>{new Date().getFullYear()}. All rights Reserved. </p>
            <ul>
                <li className='list-disc ml-4'>
                 <Link className='hover:underline' href="https://preview.tabler.io/changelog.html">v1.0.0-beta16</Link>
                </li>
            </ul>
        </DivCopyRight>
        <DivDocument>
            <p className='mr-2'>Documentation</p>
            <ul className='flex items-center gap-2'>
                <li className='list-disc ml-4'>
                 <Link className='hover:underline' href="https://preview.tabler.io/license.html">License</Link>
                </li>
                <li className='list-disc ml-4'>
                 <Link className='hover:underline' href="https://github.com/tabler/tabler">Source code</Link>
                </li>
                <li className='list-disc ml-4'>
                 <Link className='hover:underline  fill-red-400 ' href="https://github.com/sponsors/codecalm">
                    <IconHeart size={16} className='inline-block mr-1 fill-red-400 text-red-400 '/>Sponsor</Link>
                </li>
            </ul>
        </DivDocument>
    </Div>
  )
}

export default Footer
 const Div=tw.div`
 flex
 flex-col
 py-8
 md:flex-row
 md:justify-between
 `
 const DivCopyRight=tw.div`
 flex
 text-[#616876]
 sm:gap-2
 items-center
 justify-center
 md:flex-row
 flex-wrap
 `
 const DivDocument=tw.div`
 flex
 text-[#616876]
 sm:gap-2
 items-center
 justify-center
 md:flex-row
 flex-wrap
 order-first
 sm:order-last
 `
