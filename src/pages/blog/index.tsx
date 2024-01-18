import { Inter } from 'next/font/google'
import Layout from '../layout'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <Layout>
      <h1 className="flex flex-row justify-center min-h-dvh text-4xl p-6 font-bold">Blog</h1>
    </Layout>
  )
}