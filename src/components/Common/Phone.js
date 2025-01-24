'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { MdPhone } from 'react-icons/md'
import { GTM_ID } from '@/lib/contentful/settings'

const Phone = () => {
  const phoneNumber = '971551182021'

  const handleLinkClick = () => {
    const telUrl = `tel:${phoneNumber}`
    sendGTMEvent({
      event: 'conversion',
      send_to: `${GTM_ID}/dJtbCMnRpNkZEPn6ttkq`,
      value: 1.0,
      currency: 'AED',
    })
    window.open(telUrl, '_self')
  }

  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={handleLinkClick}
    >
      <MdPhone />
      {phoneNumber}
    </div>
  )
}

export default Phone
