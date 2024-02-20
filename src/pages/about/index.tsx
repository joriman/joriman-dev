import Inner from '@/components/layout/inner'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <Inner>
      <Head>
        <title>Jamon Jordan Portfolio Website & Blog | Landing Page</title>
        <meta property="og:title" content="Jamon Jordan's portfolio website and blog" key="title" />
      </Head>
      <main className="font-mono flex justify-center dark:bg-gray-800">
        <div className="text-gray-300">
          <div className="flex p-8">
            <div className="flex-shrink-0 w-16 pr-4">
              <div className="text-gray-400 leading-5">
                <span className="block">1</span>
                <span className="block">2</span>
                <span className="block">3</span>
                <span className="block">4</span>
                <span className="block">5</span>
                <span className="block">6</span>
                <span className="block">7</span>
              </div>
            </div>
            <div className="code-content text-gray-800 dark:text-gray-300">
              <div className="hover:bg-gray-600 hover:text-white" data-line-number="1">{"const aboutMe = () => {"}</div>
              <div className="hover:bg-gray-600 hover:text-white" data-line-number="2">{"let name = \"Jamon\";"}</div>
              <div className="hover:bg-gray-600 hover:text-white" data-line-number="3">{"let role = \"Full Stack Developer\";"}</div>
              <div className="hover:bg-gray-600 hover:text-white" data-line-number="11">{"return {"};</div>
              <div className="hover:bg-gray-600 hover:text-white" data-line-number="10">{"\"Passionate about crafting excellent digital experiences!\";"}</div>
              <div className="hover:bg-gray-600 hover:text-white" data-line-number="11">{"}"};</div>
            </div>
          </div>
        </div>
      </main>
    </Inner>
  )
}