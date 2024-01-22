import { ClerkProvider } from '@/components/providers/clerk-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ClerkProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ClerkProvider>
  )
}
