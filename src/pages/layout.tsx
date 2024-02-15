import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Navbar />
        <main>
            {children}
        </main>
      <Footer />
    </div>
  )
}