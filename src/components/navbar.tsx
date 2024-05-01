import Link from "next/link"
import MainLogo from "../assets/mainlogo/main-logo"

export function Navbar() {
    return (
        <nav className="flex py-3 justify-around items-center min-h-6 transition ease-in-out delay-300 bg-white dark:bg-royal-navy">
            <Link className="" href="/">
                <MainLogo />
            </Link>
            <div className="flex flex-row md:space-x-4 font-semibold text-gray-800 dark:text-gray-200 text-md md:text-xl">
                <Link className="p-2 rounded-xl hover:bg-opacity-85 hover:bg-yellow-500" href="/services">
                    <h2>Services</h2>
                </Link>
                <Link className="p-2 rounded-xl hover:bg-opacity-85 hover:bg-yellow-500" href="/about">
                    <h2>About</h2>
                </Link>
                <Link className="p-2 rounded-xl hover:bg-opacity-85 hover:bg-yellow-500" href="/blog">
                    <h2>Blog</h2>
                </Link>
                <Link className="p-2 rounded-xl hover:bg-opacity-85 hover:bg-yellow-500" href="/projects">
                    <h2>Projects</h2>
                </Link>
            </div>
        </nav>
    )
}