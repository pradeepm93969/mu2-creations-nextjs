import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Toast from '@/components/Toast/Toast'
import ScrollToTop from '@/components/Common/ScrollToTop'
import Whatsapp from '@/components/Common/Whatsapp'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { GA_ID, GTM_ID } from '@/lib/contentful/settings'
import IndianWhatsapp from '@/components/Common/IndianWhatsapp'
import UAEWhatsapp from '@/components/Common/UAEWhatsapp'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'MU2 creations | Digital printing and production',
  description:
    'At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://embed.tawk.to/6668c4f7981b6c56477c1662/1i04k2q4o"
          async
          crossOrigin="*"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Toast className="py-10" />
        <main className="font-normal">
          <Header />
          {children}
          <Footer />
          <IndianWhatsapp isSticky={true} />
          <UAEWhatsapp isSticky={true} />
          <ScrollToTop />
        </main>
        <SpeedInsights />
      </body>
      {/* Google Tag manager */}
      <GoogleTagManager gtmId={GTM_ID} />
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  )
}
