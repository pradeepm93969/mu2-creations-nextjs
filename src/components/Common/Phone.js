'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { MdPhone } from 'react-icons/md'
import { GTM_ID } from '@/lib/contentful/settings'

const Phone = ({ phoneNumber, gtmPhoneId, isSticky = false }) => {
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

  if (isSticky) {
    const isIndianNumber = phoneNumber?.startsWith('+91')
    const height = isIndianNumber ? 'bottom-6' : 'bottom-6'
    const label = isIndianNumber ? 'India' : 'UAE'
    const labelShift = isIndianNumber ? '-right-14' : '-right-12'

    return (
      <a
        href={`tel:${phoneNumber}`}
        aria-label={`Call Now`}
        className={`fixed ${height} left-2 cursor-pointer transition-colors duration-300 rounded-full p-3 shadow-md flex flex-row bg-red-500 hover:bg-red-600`}
      >
        <MdPhone className="text-white text-2xl" />

        {/* <span
          className={`absolute -bottom-3 left-1/2 -translate-x-1/2 text-white text-sm px-1 rounded`}
          style={{
            textShadow: `1px 1px 2px rgba(0, 0, 0, 0.8),
                      -1px -1px 2px rgba(0, 0, 0, 0.8)`,
          }}
        >
          {label}
        </span> */}
      </a>
    )
  }

  return (
    <a
      className="flex items-center justify-center gap-2 cursor-pointer"
      href={`tel:${phoneNumber}`}
    >
      <MdPhone />
      {phoneNumber}
    </a>
  )
}

export default Phone
