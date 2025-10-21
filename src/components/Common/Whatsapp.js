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
    const isIndianNumber = phoneNumber?.startsWith('+91')
    const height = isIndianNumber ? 'bottom-6' : 'bottom-20'
    const label = isIndianNumber ? 'India' : 'UAE'
    const labelShift = isIndianNumber ? '-right-14' : '-right-10'

    return (
      <a
        href={`https://wa.me/${phoneNumber}?text=`}
        aria-label={`WhatsApp Now`}
        className={`fixed ${height} left-2 cursor-pointer transition-colors duration-300 rounded-full p-2.5 shadow-md flex flex-row bg-green-500 hover:bg-green-600`}
      >
        <MdWhatsapp className="text-white text-3xl" />

         {/* Tooltip on hover */}
        <span
          className="z-40 absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap"
        >
          WhatsApp Now
        </span>
      </a>
    )
  }

  return (
    <a
      className="flex items-center justify-center gap-2 cursor-pointer"
      href={`https://wa.me/${phoneNumber}?text=`}
    >
      <MdWhatsapp />
      {phoneNumber}
    </a>
  )
}

export default Whatsapp
