'use client'
import {useContext} from 'react'
import { MyContext } from '../Context/context';


import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Link from 'next/link';
import Button from './button';
import Image from 'next/image';


import ChangeColorButton from './changeColorButton';



function NavBar({ handleColor }:any) {
  const bool = useContext(MyContext)
  const Links = [
    { name: "QR Code", link: "/QR-Code" },
    { name: "FAQ", link: "/faq" },
    { name: "Why Us?", link: "/why-us" },
    { name: "Product", link: "/product" },
    { name: "API", link: "/api" },
    { name: "Blog", link: "/blog" },
    { login: "Login", link: "/login" },
    { login: "Dashboard", link: "/dashboard" },

  ];

  const [open, setOpen] = useState(false);

  const ClickCruss = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 pb-6 flex shadow-md  z-10 items-center ${bool ? 'bg-white text-[#66799e]' : 'bg-[#0b0b0b]'} ${open === false ? '' : 'pb-8'}`}>

        <div className={`flex pl-[35px] md:pl-[50px]`}>
          <Link href="/" className="font-bold text-lg ">
            <Image className={`w-[103px] mt-4 h-8 md:ml-[23px] ml-[0px] ${open === false ? 'h-8' : 'w-[110px]'} ${bool?'show':'hidden'}`}
              src='/Image1/logo-title.png' // Path to the image file
              alt="Descriptive image alt text" // Alt text for accessibility
              width={100} 
              height={100}
            />
            <Image className={`w-[103px] mt-4 h-8 md:ml-[23px] ml-[0px] ${open === false ? 'h-8' : 'w-[110px]'} ${bool?'hidden':'show'}`}
              src='/Image1/logo-title-white.png' // Path to the image file
              alt="Descriptive image alt text" // Alt text for accessibility
              width={100} 
              height={100}
            />


          </Link>
        </div>

        <div onClick={ClickCruss} className='text-3xl absolute right-8 sm:right-16 md:top-4 top-4  cursor-pointer lg:hidden'>
          <IoMenu className={`${open === false ? 'show' : 'hidden text-black'} ${bool ? 'text-[#66799e]' : 'text-[#66799e]'}`} />

          <IoCloseSharp className={` ${open === false ? 'hidden text-black' : 'show'} ${bool ? 'text-[#66799e]' : 'text-[#66799e]'}`} />
        </div>
        <ul className={`lg:flex w-full lg:space-x-10 space-x-2 md:space-x-4 mt-3 md:px-6 px-1 
        ${open === false ? 'hidden' : 'top-[72px] bg-black'} 
          ${bool ? 'lg:bg-white bg-gray-200 pb-4 px-7 ' : 'pb-4 px-7'} absolute lg:static  w-full md:w-auto mx-0 md:ml-8 `}>
          {
            Links.map((link) => (
              <>
                <li key={link.name} className={`text-lg lg:text-xl md:text-[18px] ${open?'mt-4':'mt'}`}>
                  <Link href={link.link} className={` hover:text-blue-400 duration-300 grid  space-y-4 ${bool ? '' : 'text-[#a5afc9] hover:text-blue-400'} pl-2 xl:ml-6 mr-0 `}>{link.name}


                    {
                      link.login === 'Dashboard' && <button className={`lg:hidden flex mt-3 items-center justify-center bg-blue-600 px-6 rounded-md text-white font-bold ${link.login === 'Dashboard' ? 'show mr-9' : 'hidden'} `}>
                        <MdOutlineDashboardCustomize />
                        {link.login}
                        {/* <LoginButton /> */}
                      </button>
                    }

                    {
                      link.login === 'Login' && <button className={`lg:hidden flex mt-3 items-center justify-center bg-orange-600 px-6 rounded-md text-white font-bold ${link.login === 'Login' ? 'show mr-9' : 'hidden'}`}>
                        <FaArrowRight />
                        {link.login}
                        {/* <LoginButton /> */}
                      </button>
                    }

                  </Link>
                </li>

              </>
            ))
          }
         
        </ul>
        <ChangeColorButton bool={bool} handleColor={handleColor} open={open} />
        <Button open={open} />
      </nav>
    </>
  )
}

export default NavBar