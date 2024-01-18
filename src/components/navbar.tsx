import Link from "next/link"
import MainLogo from "./main-logo"

export function Navbar() {
    return (
        <nav className="flex justify-around items-center min-h-6 transition ease-in-out delay-300 bg-blue-500 m-2 rounded-xl">
            <Link className="" href="/">
                <MainLogo />
            </Link>
            <div className="flex flex-row">
                <Link className="p-3 hover:bg-blue-700" href="/about">
                    <h2 className="text-white text-2xl font-semibold">About</h2>
                </Link>
                <Link className="p-3 hover:bg-blue-700" href="/blog">
                    <h2 className="text-white text-2xl font-semibold">Blog</h2>
                </Link>
                <Link className="p-3 hover:bg-blue-700" href="/contact">
                    <h2 className="text-white text-2xl font-semibold">Contact</h2>
                </Link>
            </div>
        </nav>
    )
}