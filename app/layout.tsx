import './globals.css'
import {Roboto} from '@next/font/google'
import Navbar from './components/Navbar'

const roboto = Roboto({
  display: 'swap',
  weight: [ '300', '500', '700', '900'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
