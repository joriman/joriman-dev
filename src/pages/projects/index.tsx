import Inner from '@/components/layout/inner'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <Inner>
      <Head>
        <title>Projects | Jamon Jordan Portfolio Website & Blog</title>
        <meta property="og:title" content="Projects showcase" key="title" />
      </Head>
      <h1 className="flex flex-row justify-center min-h-dvh text-4xl p-6 font-bold">Projects</h1>
    </Inner>
  )
}