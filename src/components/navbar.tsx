import Link from "next/link"
import MainLogo from "./main-logo"

export function Navbar() {
    return (
        <nav className="flex my-2 justify-around items-center min-h-6 transition ease-in-out delay-300 rounded-xl">
            <Link className="" href="/">
                <MainLogo />
            </Link>
            <div className="flex flex-row">
                <Link className="p-2 mx-1 md:p-3 hover:bg-gray-200 rounded-xl" href="/about">
                    <h2 className="text-gray-800 text-md md:text-2xl font-semibold">About</h2>
                </Link>
                <Link className="p-2 mx-1 md:p-3 hover:bg-gray-200 rounded-xl" href="/blog">
                    <h2 className="text-gray-800 text-md md:text-2xl font-semibold">Blog</h2>
                </Link>
                <Link className="p-2 mx-1 md:p-3 hover:bg-gray-200 rounded-xl" href="/contact">
                    <h2 className="text-gray-800 text-md md:text-2xl font-semibold">Contact</h2>
                </Link>
            </div>
        </nav>
    )
}