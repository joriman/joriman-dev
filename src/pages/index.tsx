import { Inter } from 'next/font/google'
import Layout from './layout'
import Link from 'next/link';
import Head from 'next/head'
import Technicals from '@/components/landingpage/technicals_section';
import AboutSection from '@/components/landingpage/about_section';
import ContactMeSection from '@/components/landingpage/contact-me-section';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Jamon Jordan Portfolio Website & Blog | Landing Page</title>
				<meta property="og:title" content="Jamon Jordan's portfolio website and blog" key="title" />
			</Head>
			<Layout>
				<main className="flex flex-col justify-center w-full dark:bg-royal-navy">

					<section className="flex flex-col min-h-96 h-[calc(100svh-220px)] justify-center text-center space-y-12">
						<div>
							<h1 className="py-4 text-4xl font-extrabold md:text-8xl text-yellow-500 inline-block bg-clip-text">Hi! My name is Jamon</h1>
							<div className="p-8 space-y-4 text-center text-gray-700 dark:text-gray-200">
								<p className="text-md md:text-2xl">I&apos;m a passionate developer with expertise in web, mobile, and software development.</p>
								<p className="text-md md:text-2xl">I love turning ideas into reality through clean and efficient code.</p>
							</div>
						</div>
					</section>

					<section className="text-center w-full">
						<div className="rotate-180">
							<svg className="flex w-full h-[128px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
								<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className=" fill-royal-navy dark:fill-yellow-500"></path>
								<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-royal-navy dark:fill-yellow-500"></path>
								<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-royal-navy dark:fill-yellow-500"></path>
							</svg>
						</div>
						<div className="bg-royal-navy dark:bg-yellow-500 space-y-4 pb-32">
							<AboutSection />
							<h2 className="font-bold text-4xl text-white dark:text-royal-navy pb-8	">The Technicals</h2>
						</div>
					</section>

					<section className='block mt-[-6rem] md:mt-[-8rem] p-6 pb-24'>
						<Technicals />
					</section>

					<section className="text-center space-y-4 bg-yellow-500 text-white font-bold py-12">
						<div className="flex flex-col justify-center">
							<div>
								<h2 className="font-bold text-4xl m-6 text-center">Recent Projects</h2>
								<p className="text-lg m-6">Explore some of my latest work:</p>
								<Link href="/projects" className="text-lg py-2 px-4 bg-royal-navy rounded-lg text-white">View Projects</Link>
							</div>	
						</div>
					</section>

					<section className="flex flex-col items-center mx-6 mb-14 md:mx-24 text-gray-800 dark:text-gray-200">
						<div className="flex flex-col justify-center py-4 text-center">
							<h2 className="font-bold text-4xl m-6">Contact Me</h2>
							<p className="text-lg mb-4">Let&apos;s discuss your project or have a chat!</p>
						</div>
						<ContactMeSection />
					</section>
				</main>
			</Layout>
		</>
	)
}
