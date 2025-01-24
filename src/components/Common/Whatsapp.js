'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { MdWhatsapp } from 'react-icons/md'
import { GTM_ID } from '@/lib/contentful/settings'

const Whatsapp = ({ isSticky = false }) => {
  const phoneNumber = '971551182021'

  const handleLinkClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=`
    sendGTMEvent({
      event: 'conversion',
      send_to: `${GTM_ID}/Yip-CM3lm9kZEPn6ttkq`,
    })
    window.open(whatsappUrl, '_self')
  }

  if (isSticky) {
    return (
      <div
        onClick={handleLinkClick}
        className="fixed bottom-2 left-2 cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-full p-3 shadow-md"
      >
        <MdWhatsapp className="text-white text-3xl" />
      </div>
    )
  }

  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={handleLinkClick}
    >
      <MdWhatsapp />
      {phoneNumber}
    </div>
  )
}

export default Whatsapp
