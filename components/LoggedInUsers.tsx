import React, { useState, useEffect } from 'react';
import { getFromStorage} from '../pages/src/utils';
import tw from 'twin.macro';
import Router from 'next/router';
import Link from 'next/link';
const LoggedInUsers = () => {
    let loggedusers;
    if(typeof window!=="undefined") {
        loggedusers= getFromStorage("users"||[]);
    }
   
  return (
    <div>
      {
        loggedusers?.map((user, index)=>(
          <button  onClick={()=>{Router.replace('/'+ `${index}`)}} key={user.id}>
            <List>
              <p className='text-center'>{user.email.split("@")[0]}</p>
               <p>{user.email}</p>
            </List>
               
          </button>
         
        ))
      }
    </div>
  )
}
const List=tw.li`
list-none
pl-[8px]
gap-3
mb-3
border
border-red-200
rounded-md
text-[16px]
`

export default LoggedInUsers
