import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Think & Code - Des solutions qui ont un impact reel',
  description: 'Think & Code est une entreprise technologique senegalaise specialisee dans le developpement de solutions numeriques, la formation de developpeurs et les services freelance.',
  keywords: ['Think & Code', 'developpement web', 'formation', 'Dakar', 'Senegal', 'tech', 'freelance'],
  icons: {
    icon: '/team/logo.png',
    apple: '/team/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
