import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Toast from '@/components/Toast/Toast'
import ScrollToTop from '@/components/Common/ScrollToTop'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { getSiteSettings } from '@/lib/contentful/api'
import { SiteSettingsProvider } from '@/components/Common/SiteSettingsProvider'
import UAEWhatsapp from '@/components/Common/UAEWhatsapp'
import UAEPhone from '@/components/Common/UAEPhone'
import IndianWhatsapp from '@/components/Common/IndianWhatsapp'
import IndianPhone from '@/components/Common/IndianPhone'

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

// Re-fetch site settings (GTM / GA IDs) from Contentful at most once an hour
export const revalidate = 3600

export default async function RootLayout({ children }) {
  const siteSettings = await getSiteSettings()

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <SiteSettingsProvider settings={siteSettings}>
          <Toast className="py-10" />
          <main className="font-normal">
            <Header />
            {children}
            <Footer />
            {/* <IndianWhatsapp isSticky={true} />
            <IndianPhone isSticky={true} /> */}
            <UAEWhatsapp isSticky={true} />
            <UAEPhone isSticky={true} />
            <ScrollToTop />
          </main>
        </SiteSettingsProvider>
        <SpeedInsights />
      </body>
      {/* Google Tag manager */}
      <GoogleTagManager gtmId={siteSettings.gtmId} />
      <GoogleAnalytics gaId={siteSettings.gaId} />
    </html>
  )
}
