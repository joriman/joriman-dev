import { Inter } from 'next/font/google'
import Layout from '../layout'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>Blog | Jamon Jordan Portfolio Website & Blog</title>
				<meta property="og:title" content="Where you can find all of Jamon's blog posts!" key="title" />
      </Head>
      <h1 className="flex flex-row justify-center min-h-dvh text-4xl p-6 font-bold">Blog</h1>
    </>
    
  )
}