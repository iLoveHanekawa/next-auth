import Link from "next/link";
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin']})

export default function NavBar() {
    return <div className = {`py-6 px-3 gap-5 flex items-start bg-blue-400 text-white ${nunito.className}`}>
        <Link href = {'/'}>Home</Link>
        <Link href = {'/dashboard'}>Dashboard</Link>
        <Link href = {'/blog'}>Blog</Link>
        <Link href = {'#'}>Signup</Link>
        <Link href = {'#'}>Signin</Link>
    </div>
}