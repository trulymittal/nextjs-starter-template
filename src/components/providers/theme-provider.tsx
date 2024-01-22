'use client'

import { ThemeProvider as MThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </MThemeProvider>
  )
}
