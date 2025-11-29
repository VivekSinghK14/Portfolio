'use client'
import About from "@/component/About";
import Contact from "@/component/Contact";
import Header from "@/component/Header";
import Navbar from "@/component/Navbar";
import Work from "@/component/Work";
import { assets } from '@/public/Asset/assets'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='fixed top-0 left-0 w-11/12 h-screen bg-black -z-10 translate-y-[80%]'>
        <Image src={assets.header_bg_color} alt='Not working' className='w-full' width='200' height="400" name="Vivek" />
      </div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
    </>

  );
}
