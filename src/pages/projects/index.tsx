import { Inter } from 'next/font/google'
import Layout from '../layout'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Projects | Jamon Jordan Portfolio Website & Blog</title>
        <meta property="og:title" content="Projects showcase" key="title" />
      </Head>
      <h1 className="flex flex-row justify-center min-h-dvh text-4xl p-6 font-bold">Projects</h1>
    </>
  )
}