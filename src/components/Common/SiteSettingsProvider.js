'use client'
import { createContext, useContext } from 'react'
import { GA_ID, GTM_ID } from '@/lib/contentful/settings'

const SiteSettingsContext = createContext({ gtmId: GTM_ID, gaId: GA_ID })

export const SiteSettingsProvider = ({ settings, children }) => (
  <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>
)

export const useSiteSettings = () => useContext(SiteSettingsContext)
