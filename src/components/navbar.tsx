import Link from "next/link"
import MainLogo from "./main-logo"

export function Navbar() {
    return (
        <nav className="flex my-2 justify-around items-center min-h-6 transition ease-in-out delay-300 rounded-xl">
            <Link className="" href="/">
                <MainLogo />
            </Link>
            <div className="flex flex-row">
                <Link className="p-2 mx-1 md:p-3 transition ease-in-out delay-50 hover:scale-105 hover:text-pink-500 text-gray-800 text-md md:text-2xl font-semibold" href="/about">
                    <h2>About</h2>
                </Link>
                <Link className="p-2 mx-1 md:p-3 transition ease-in-out delay-50 hover:scale-105 hover:text-purple-500 text-gray-800 text-md md:text-2xl font-semibold" href="/blog">
                    <h2>Blog</h2>
                </Link>
                <Link className="p-2 mx-1 md:p-3 transition ease-in-out delay-50 hover:scale-105 hover:text-blue-500 text-gray-800 text-md md:text-2xl font-semibold" href="/contact">
                    <h2>Contact</h2>
                </Link>
            </div>
        </nav>
    )
}