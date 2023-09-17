import Nav from '@/components/Nav'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import TopRow from '@/components/TopRow'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'You Tube',
  description: 'This is YoutubeClone made by KhalidKakar',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
    <body>
      <Nav />
      <main className="flex ">

        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col items-center bg-white px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
          <div className="w-full">
            {children}
          </div>
        </section>
      </main>
    </body>
  </html>
  )
}
