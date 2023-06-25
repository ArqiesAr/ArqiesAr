import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arqies',
  description: 'Hi, I am Arqies. I am a software developer who lives in India. I am constantly learning new things and like working on new and unique projects, while improving and expanding my knowledge of different things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
