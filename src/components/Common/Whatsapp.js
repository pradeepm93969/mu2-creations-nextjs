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
    const bgColor = isIndianNumber
      ? 'bg-blue-500 hover:bg-blue-600'
      : 'bg-green-500 hover:bg-green-600'

    return (
      <div
        onClick={handleLinkClick}
        className={`fixed bottom-2 left-2 cursor-pointer ${bgColor} transition-colors duration-300 rounded-full p-3 shadow-md`}
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
