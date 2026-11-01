'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { MdEmail } from 'react-icons/md'
import { useSiteSettings } from './SiteSettingsProvider'

const Email = () => {
  const { gtmId } = useSiteSettings()
  const emailAddress = 'info@mu2creations.com'

  const handleLinkClick = () => {
    const mailtoUrl = `mailto:${emailAddress}`
    sendGTMEvent({
      event: 'conversion',
      send_to: `${gtmId}/6CgUCMvun9kZEPn6ttkq`,
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
