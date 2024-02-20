import Inner from '@/components/layout/inner'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export default function About() {
  return (
    <Inner>
      <Head>
        <title>Blog | Jamon Jordan Portfolio Website & Blog</title>
				<meta property="og:title" content="Where you can find all of Jamon's blog posts!" key="title" />
      </Head>
      <h1 className="flex flex-row justify-center min-h-dvh text-4xl p-6 font-bold">Blog</h1>
    </Inner>
    
  )
}