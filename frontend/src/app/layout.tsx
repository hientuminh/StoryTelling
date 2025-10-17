import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kể Chuyện Cho Bé',
  description: 'Ứng dụng kể chuyện tương tác dành cho trẻ em',
  keywords: ['kể chuyện', 'truyện thiếu nhi', 'giáo dục trẻ em'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
