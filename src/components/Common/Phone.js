'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { MdPhone } from 'react-icons/md'
import { GTM_ID } from '@/lib/contentful/settings'

const Phone = ({ phoneNumber, gtmPhoneId }) => {
  const handleLinkClick = () => {
    const telUrl = `tel:${phoneNumber}`
    if (gtmPhoneId) {
      sendGTMEvent({
        event: 'conversion',
        send_to: `${GTM_ID}/${gtmPhoneId}`,
        value: 1.0,
        currency: 'AED',
      })
    }
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
