import { Inter } from 'next/font/google'
import { Slide, Fade } from "react-awesome-reveal";
import Layout from './layout'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<Layout>
			<main className="flex flex-col justify-center w-full">
				<section className="flex flex-col min-h-96 h-[calc(100svh-220px)] justify-center text-center space-y-12">
					<div>
						<Slide cascade triggerOnce>
							<h1 className="py-4 text-4xl font-extrabold md:text-8xl line-clamp-1 text-center text-transparent bg-gradient-to-r from-pink-600 to-blue-600 inline-block bg-clip-text">Hi! My name is Jamon</h1>
						</Slide>
						<div className="p-8 space-y-4 text-center">
							<Fade cascade triggerOnce>
								<p className="text-lg md:text-4xl">I&apos;m a passionate developer with expertise in web, mobile, and software development.</p>
								<p className="text-lg md:text-4xl">I love turning ideas into reality through clean and efficient code.</p>
							</Fade>
						</div>
					</div>
				</section>

				<section className="text-center w-screen ">
					<div className="rotate-180">
						<svg className="flex w-full h-[128px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className=" fill-blue-700"></path>
							<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-blue-700"></path>
							<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-blue-700"></path>
						</svg>
					</div>
					<div className="bg-blue-700 min-h-[256px]">
						{/*<SkillTabs />*/}
					</div>
				</section>

				<section className="grid grid-cols-2 pt-16 px-72 text-center space-y-4 text-gray-800 font-bold">
					<div className="flex flex-col justify-center py-4">
						<div>
							<h2 className="font-bold text-4xl m-6 text-center">Recent Projects</h2>
							<p className="text-lg mb-4">Explore some of my latest work:</p>
							<Link href="/projects" className="text-lg py-2 px-4 space-y-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white">View Projects</Link>
						</div>
						
					</div>
				</section>

				<section className="grid grid-cols-2 pt-16 pb-12 px-72 text-center text-gray-800 font-bold">
					<div></div>
					<div className="flex flex-col justify-center py-4">
						<div>
							<h2 className="font-bold text-4xl m-6 text-center">Contact Me</h2>
							<p className="text-lg mb-4">Let&apos;s discuss your project or have a chat!</p>
							<Link href="/contact" className="text-lg py-2 px-4 space-y-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white"> Get in Touch</Link>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	)
}
