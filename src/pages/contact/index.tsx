import { Inter } from 'next/font/google'
import Layout from '../layout'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <Layout>
      <h1 className="flex flex-row justify-center min-h-dvh text-4xl p-6 font-bold">Contact</h1>
    </Layout>
  )
}