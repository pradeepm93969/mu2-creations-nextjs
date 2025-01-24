'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { MdEmail } from 'react-icons/md'
import { GTM_ID } from '@/lib/contentful/settings'

const Email = () => {
  const emailAddress = 'info@mu2creations.com'

  const handleLinkClick = () => {
    const mailtoUrl = `mailto:${emailAddress}`
    sendGTMEvent({
      event: 'conversion',
      send_to: `${GTM_ID}/6CgUCMvun9kZEPn6ttkq`,
    })
    window.open(mailtoUrl, '_self')
  }

  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={handleLinkClick}
    >
      <MdEmail />
      {emailAddress}
    </div>
  )
}

export default Email
