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
    const height = isIndianNumber ? 'bottom-6' : 'bottom-24'
    const label = isIndianNumber ? 'India' : 'UAE'
    const labelShift = isIndianNumber ? '-right-14' : '-right-12'

    return (
      <div
        onClick={handleLinkClick}
        className={`fixed ${height} left-2 cursor-pointer transition-colors duration-300 rounded-full p-3 shadow-md flex flex-row bg-green-500 hover:bg-green-600`}
      >
        <MdWhatsapp className="text-white text-2xl" />

        <span
          className={`absolute ${labelShift} -translate-x-1/2 text-white text-sm px-1 rounded`}
          style={{
            textShadow: `1px 1px 2px rgba(0, 0, 0, 0.8),
                      -1px -1px 2px rgba(0, 0, 0, 0.8)`,
          }}
        >
          {label}
        </span>
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
