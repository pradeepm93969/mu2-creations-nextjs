'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { MdWhatsapp } from 'react-icons/md'
import { GTM_ID } from '@/lib/contentful/settings'

const Whatsapp = ({ phoneNumber, gtmWhatappId, isSticky = false }) => {
  const handleLinkClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=`
    if (gtmWhatappId) {
      sendGTMEvent({
        event: 'conversion',
        send_to: `${GTM_ID}/${gtmWhatappId}`,
      })
    }
    window.open(whatsappUrl, '_self')
  }

  if (isSticky) {
    const isIndianNumber = phoneNumber?.startsWith('91')
    const flagUrl = isIndianNumber
      ? '/images/flags/india.png' // Place these in your /public/flags folder
      : '/images/flags/uae.png'
    const height = isIndianNumber ? 'bottom-2' : 'bottom-20'

    return (
      <div
        onClick={handleLinkClick}
        className={`fixed ${height} left-2 cursor-pointer transition-colors duration-300 rounded-full p-3 shadow-md flex justify-center items-center`}
        style={{
          backgroundImage: `url(${flagUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: 'brightness(0.7)', // if you want a dimmed look
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50 rounded-full"
          style={{ zIndex: 1 }}
        />
        <MdWhatsapp
          className="text-white text-4xl"
          style={{ position: 'relative', zIndex: 2 }}
        />
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
