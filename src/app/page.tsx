import { ModeToggle } from '@/components/mode-toggle'
export default function Home() {
  const data = '123'
  console.log('123')
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hello world</h1>
      <ModeToggle />
    </main>
  )
}
