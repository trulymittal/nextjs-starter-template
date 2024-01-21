import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hello world</h1>
      <Link href='/protected'>Protected page</Link>
      <ModeToggle />
      <UserButton />
    </main>
  )
}
