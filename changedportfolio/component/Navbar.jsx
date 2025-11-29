import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/public/Asset/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef(null)

  const openMenu = () => {
    sideMenuRef.current.style.right = '0'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.right = '-100%'
  }

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed w-full px-5 lg:px-8 py-4 flex items-center justify-between md:justify-center z-50 transition-all duration-100 ${isScroll ? 'bg-[#d4a373] text-white backdrop-blur-md shadow-lg' : ''
          }`}
      >
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li><a href="#top" className={`font-Ovo  ${isScroll ? 'hover:text-black ' : ' hover:text-[#d4a373]'} `}>Home</a></li>
          <li><a href="#about" className={`font-Ovo  ${isScroll ? 'hover:text-black ' : ' hover:text-[#d4a373]'} `}>About me</a></li>
          <li><a href="#Work" className={`font-Ovo  ${isScroll ? 'hover:text-black ' : ' hover:text-[#d4a373]'} `}>My Work</a></li>
          <li><a href="#Contact" className={`font-Ovo  ${isScroll ? 'hover:text-black ' : ' hover:text-[#d4a373]'} `}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="relative md:hidden left-[96%] top-0 right-6" onClick={openMenu}>
          <Image
            src={isScroll ? assets.menuWhite : assets.menuBlack}
            alt="menu"
            width={24}
            height={24}
          />
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 -right-full w-screen h-screen bg-white/95 backdrop-blur-md 
        flex flex-col gap-6 py-20 px-6 transition-all duration-500 shadow-lg border-l border-gray-200 z-[999] text-center"
      >
        {/* Close Button */}
        <div className="absolute top-5 right-4 cursor-pointer" onClick={closeMenu}>
          <Image src={assets.closeBlack} alt="close" width={20} height={20} />
        </div>

        <a href="#top" onClick={closeMenu} className="font-Ovo hover:text-purple-400 transition">Home</a>
        <a href="#about" onClick={closeMenu} className="font-Ovo hover:text-purple-400 transition">About me</a>
        <a href="#Work" onClick={closeMenu} className="font-Ovo hover:text-purple-400 transition">My Work</a>
        <a href="#Contact" onClick={closeMenu} className="font-Ovo hover:text-purple-400 transition">Contact</a>
      </div>
    </>
  )
}

export default Navbar
