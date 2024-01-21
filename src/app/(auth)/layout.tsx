import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='space-y-2'>
        <Button variant='link' asChild className='group'>
          <Link href='/'>
            <ArrowLeftIcon className='mr-2 h-4 w-4 transition-all group-hover:mr-4' />
            Back to home
          </Link>
        </Button>
        <div>{children}</div>
      </div>
    </div>
  )
}
