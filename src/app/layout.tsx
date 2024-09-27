'use client'

import "./globals.css";
import { useState } from "react";
import NavBar from "./components/navbar/navbar";
import { MyContext } from "./components/Context/context";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [color, setColor] = useState('white');
  const [bool , setBool] = useState(true);
  const handleColor = ()=>{
     if(color === 'white'){
        setColor('black')
        setBool(false)
     }else{
       setColor('white')
       setBool(true)
     }
  }

  const icon = [
   {link: 'FaHome'}
 ]
  return (
    <html lang="en">
      <MyContext.Provider value={bool}>
      <body>
        <NavBar handleColor={handleColor}/>
        {children}
      </body>
      </MyContext.Provider>

    </html>
  );
}
