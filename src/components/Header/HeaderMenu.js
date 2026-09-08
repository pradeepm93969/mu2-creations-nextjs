'use client'

import React, { useEffect, useState } from 'react'
import Email from '../Common/Email'
import Link from 'next/link'
import Image from 'next/image'
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMenuOpen,
} from 'react-icons/md'
import IndianPhone from '../Common/IndianPhone'
import UAEPhone from '../Common/UAEPhone'
import UAEWhatsapp from '../Common/UAEWhatsapp'
import IndianWhatsapp from '../Common/IndianWhatsapp'

const HeaderMenu = ({ services }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobileServiceMenuOpen, setMobileServiceMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleDropdownToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index)
  }

  const openMobileMenu = () => {
    setMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileServiceMenuOpen(false)
  }

  const toggleMobileServices = () => {
    setMobileServiceMenuOpen(!isMobileServiceMenuOpen)
  }

  // Define an array of navigation items
  const navItems = [
    { text: 'Home', url: '/' },
    { text: 'Services', url: '/services' },
    { text: 'Blogs', url: '/blogs' },
    { text: 'Contact Us', url: '/contact-us' },
  ]

  const renderMobileMenu = (navItems, services) => {
    return (
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
          isMobileMenuOpen ? '-translate-x-0' : 'translate-x-full'
        } transition-transform ease-in-out duration-300 overflow-hidden`}
      >
        <div className="flex justify-between items-center border-b-2 px-6 py-4">
          <div className="flex items-center">
            <Image src="/images/Logo-d.png" width={80} height={70} alt="Logo" />
            <div className="flex flex-col md:flex-row md:gap-2 text-primary-dark font-medium md:font-semibold text-2xl md:text-3xl lg:text-4xl ml-2">
              <div className="">MU2</div>
              <div className="text-xl pt-0 md:pt-1 xl:pt-0 md:text-2xl lg:text-3xl xl:text-4xl text-start">
                Creations
              </div>
            </div>
          </div>
          <div
            className="text-slate-500 text-5xl cursor-pointer"
            onClick={closeMobileMenu}
          >
            &times;
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-[90%]">
          <div className="flex flex-col justify-between items-center gap-5 py-6">
            {navItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-center items-center w-full">
                  <Link
                    key={index}
                    href={item.url}
                    className="hover:text-tertiary-dark text-primary-dark text-2xl mx-10"
                    onClick={closeMobileMenu}
                  >
                    {item.text}
                  </Link>
                  {item.text == 'Services' && (
                    <div
                      className="cursor-pointer"
                      onClick={toggleMobileServices}
                    >
                      {isMobileServiceMenuOpen ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </div>
                  )}
                </div>
                {item.text == 'Services' &&
                  isMobileServiceMenuOpen &&
                  services &&
                  services.length > 0 && (
                    <div className="py-4 text-2xl hover:text-tertiary-dark">
                      <div className="ml-4 flex flex-col gap-3 text-base">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            onClick={closeMobileMenu}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>

          <div className="mt-auto border-t-2 w-full flex flex-col gap-6 py-6 text-xl">
            <Email />
            <UAEPhone />
            {/* <IndianPhone /> */}
            <UAEWhatsapp />
            {/* <IndianWhatsapp /> */}
          </div>
        </div>
      </div>
    )
  }

  return (
    <header
      className={`flex flex-col z-40 fixed w-full ${
        isScrolled ? '-top-10 ' : 'top-0'
      } transition-all duration-300 ease-in-out`}
    >
      {/* Top Header */}
      <div className="bg-stone-900 text-white px-0 lg:px-5">
        <div className="container mx-auto flex justify-center lg:justify-between items-center h-10">
          <div className="lg:font-normal text-[16px] lg:text-lg">
            Print with Precision, Create with Passion
          </div>
          <div className="hidden lg:flex font-normal text-[12px] lg:text-lg">
            <UAEPhone />
          </div>
          {/* <div className="hidden lg:flex font-normal text-[12px] lg:text-lg">
            <IndianPhone />
          </div> */}
          <div className="hidden xl:flex font-normal text-[12px] lg:text-lg">
            <Email />
          </div>
          <div className="hidden lg:flex font-normal text-[12px] lg:text-lg">
            <UAEWhatsapp />
          </div>
          {/* <div className="hidden lg:flex font-normal text-[12px] lg:text-lg">
            <IndianWhatsapp />
          </div> */}
        </div>
      </div>

      {/* Main header */}
      <div className="flex flex-wrap shadow-md shadow-slate-400 bg-white h-[84px]">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="flex justify-between items-center w-1/2">
            <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="flex justify-center items-center ml-3 gap-3 ">
                <Image
                  src="/images/Logo-d.png"
                  width={80}
                  height={70}
                  alt="Logo"
                />
                <div className="flex flex-col md:flex-row md:gap-2 text-primary-dark font-medium md:font-semibold text-2xl md:text-3xl lg:text-4xl">
                  <div className="">MU2</div>
                  <div className="text-xl pt-0 md:pt-1 xl:pt-0 md:text-2xl lg:text-3xl xl:text-4xl text-start">
                    Creations
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigations */}
          <div className="hidden lg:flex justify-between items-center font-medium text-2xl text-primary-dark w-1/2 mr-2 lg:mr-2">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative hover:-translate-y-1 duration-500 transition-all hover:text-tertiary-dark"
                onMouseEnter={() => handleDropdownToggle(index)}
                onMouseLeave={() => handleDropdownToggle(index)}
              >
                <Link href={item.url}>{item.text}</Link>
                {item.text === 'Services' && activeMenu === index && (
                  <div className="absolute z-50 -right-10 mt-0 w-72 h-auto bg-white border-4 border-gray-200 rounded-md shadow-2xl shadow-black text-primary-dark text-lg flex flex-col px-6 py-2">
                    {/* Render dropdown content for "Services" */}
                    {Array.isArray(services) &&
                      services.map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service.slug}`}
                          className={`py-1 hover:text-tertiary-dark ${
                            index !== services.length - 1 ? ' border-b-2' : ''
                          }`}
                        >
                          {service.title}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:hidden text-slate-500 text-5xl flex justify-items-end cursor-pointer pr-3">
            <MdMenuOpen onClick={openMobileMenu} />
          </div>
        </div>
      </div>

      {renderMobileMenu(navItems, services)}
    </header>
  )
}

export default HeaderMenu
