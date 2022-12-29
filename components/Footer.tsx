import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { AiOutlineHeart } from "react-icons/ai";

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
        <DivCopyRight>
            <p>Documentation</p>
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
        </DivCopyRight>
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
 gap-2
 items-center
 justify-center
 md:flex-row
 md:justify-between
 `
