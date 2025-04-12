import Link from 'next/link'
import React from 'react'
import Phone from '../Common/Phone'
import Email from '../Common/Email'
import Social from '../Common/Social'
import Address from '../Common/Address'
import IndianPhone from '../Common/IndianPhone'
import UAEPhone from '../Common/UAEPhone'
import UAEWhatsapp from '../Common/UAEWhatsapp'
import IndianWhatsapp from '../Common/IndianWhatsapp'

const Footer = () => {
  return (
    <footer>
      {/* top footer */}
      <div className="bg-primary-main text-white text-md md:text-lg tracking-wide">
        <div className="container mx-auto flex justify-between items-center py-2 px-10 md:px-20">
          <div className="hidden md:block font-medium">Help & Support</div>
          <UAEPhone />
          <IndianPhone />
        </div>
      </div>

      {/* middle footer */}
      <div className="bg-stone-900 text-white text-lg">
        <div className="container mx-auto py-2 px-2 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b-stone-300 border-b-2 py-10 px-4 md:px-0">
            <div className="text-center sm:text-start border-b-2 border-slate-300 lg:border-transparent">
              <div className="pb-4 text-3xl font-medium sm:text-start">
                MU2 Creations
              </div>
              <div className="pb-4 text-md xl:text-lg text-justify">
                MU2 Creations is a dynamic and innovative company specializing
                in a wide range of creative services. With a passion for print,
                design, and fabrication, we bring imagination to life through
                our diverse offerings.
              </div>
              <div className="pb-6">
                <Social />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3 ml-3 xl:ml-20 pb-6 border-b-2 border-slate-300 lg:border-transparent">
              <div className="text-xl font-medium mb-4">SERVICES</div>
              <Link href="/services/flags-and-poles">Flags & Poles</Link>
              <Link href="/services/signages">Signages</Link>
              <Link href="/services/exhibition-stands">Exhibition Stands</Link>
              <Link href="/services/vehicle-branding">Vehicle branding</Link>
              <Link href="/services/offset-and-gift-item-printing">
                Gift Items
              </Link>
            </div>
            <div className=" flex flex-col items-center md:items-start gap-3 ml-3 xl:ml-20 pb-6 border-b-2 border-slate-300 md:border-transparent">
              <div className="text-xl font-medium mb-4">USEFUL LINKS</div>
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/sitemap.xml">Site Map</Link>
            </div>
            <div className=" flex flex-col items-center md:items-start gap-3 ">
              <div className="text-2xl font-medium pb-4">Contact Us</div>
              <Email />
              <UAEPhone />
              <IndianPhone />
              <UAEWhatsapp />
              <IndianWhatsapp />
              <Address />
            </div>
          </div>
          <div className="text-center text-md py-2">
            © MU2 Creations 2024 - Developed by Pradeep Manjunath
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
