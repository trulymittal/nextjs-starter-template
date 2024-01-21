'use client'

import { ThemeProvider } from '@/components/theme-provider'

type ProvidersProps = {
  children: React.ReactNode
}

// hsl(var(--primary))
// --primary: 222.2 47.4% 11.2%;
//     --primary-foreground: 210 40% 98%;
export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
