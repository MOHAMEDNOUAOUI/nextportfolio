"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import SlidePage from "./Components/slidepage/slidepage";
import Panel from "./Components/panel/panel";
import Header from "./Components/header/Header";


export default function RootLayout({ children }) {

   const [showContent , setShowContent] = useState(false);
  
    useEffect(() => {
      const time = setTimeout(() => {
        setShowContent(true)
      },1200);
      return () => clearTimeout(time);
    },[]);
    

  return (
    <html lang="en">
      <body
      >
        <SlidePage></SlidePage>
        {
         showContent && (
              <div className="w-full h-screen flex gap-2 flex-col px-6">
                  <Header></Header>
                  <div className="flex h-full w-full gap-10">
                  <Panel></Panel>
                <main className="">
                  {children}
               </main>
                  </div>
              </div>
             
        )
        }
      </body>
    </html>
  );
}
