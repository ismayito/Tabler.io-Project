import React,{useState,useEffect} from 'react'
import {useTheme} from "next-themes";
import {BsSun} from 'react-icons/bs';
import Link from 'next/link';
import {MdOutlineDarkMode} from "react-icons/md"

const ThemeSwitcher = () => {
    const {theme,setTheme}=useTheme();
    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, [])
    const toggleTheme=()=>{
      if(!isMounted){
        return null
      }
      if(theme==="light"){
        return (
          <Link href="?theme=dark"
          aria-label="Enable light mode"
          >
            <MdOutlineDarkMode
            onClick={()=>setTheme("dark")}
            size={20} className="text-gray-700">
            </MdOutlineDarkMode></Link>
        )
      }
      else {
        return(
          <Link href="?theme=light"
          aria-label="Enable light mode"
          >
            <BsSun
            onClick={()=>setTheme("light")}
            size={20} className="text-gray-700 dark:text-white">
            </BsSun></Link>
        )
      }
    }
  return (
    <div>
        {toggleTheme()}
    </div>
  )
}

export default ThemeSwitcher