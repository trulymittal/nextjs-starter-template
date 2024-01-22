import { ClerkProvider as MClerkProvider } from '@clerk/nextjs'

type ProvidersProps = {
  children: React.ReactNode
}

export function ClerkProvider({ children }: ProvidersProps) {
  return (
    <MClerkProvider
      appearance={{
        variables: {
          colorPrimary: 'hsl(222.2 47.4% 11.2%)',
        },
      }}
    >
      {children}
    </MClerkProvider>
  )
}
