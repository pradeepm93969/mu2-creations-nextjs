'use client'

import Whatsapp from './Whatsapp'

const UAEWhatsapp = ({ isSticky = false }) => {
  return (
    <Whatsapp
      phoneNumber="+971551182021"
      gtmWhatappId="Yip-CM3lm9kZEPn6ttkq"
      isSticky={isSticky}
    />
  )
}

export default UAEWhatsapp
