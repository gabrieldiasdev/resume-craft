import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import '../styles/globals.css'
import { cn } from '@/lib/utils'
import { setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ClientProviders } from '@/components/shared/client-providers'

const fontSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' })
const fontTitle = Nunito({ subsets: ['latin'], variable: '--font-title' })

export const metadata: Metadata = {
  title: 'ResumeCraft',
  icons: {
    icon: '/favicon.svg',
  },
}

setDefaultOptions({ locale: ptBR })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontTitle.variable,
          fontSans.variable,
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
