import { ModeToggle } from '@/components/mode-toggle'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const data = '123'
  console.log('123')
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hello world</h1>
      <Link href='/protected'>Protected page</Link>
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  )
}
