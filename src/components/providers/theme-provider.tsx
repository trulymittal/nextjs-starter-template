'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

type ProvidersProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
