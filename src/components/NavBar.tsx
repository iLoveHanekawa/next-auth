import Link from "next/link";
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin']})
import { signIn, signOut, useSession } from 'next-auth/react'

export default function NavBar() {
    
    const { data: session, status } = useSession()

    console.log

    return <div className = {`py-6 px-3 gap-5 flex items-start bg-blue-400 text-white ${nunito.className}`}>
        <Link href = {'/'}>Home</Link>
        <Link href = {'/dashboard'}>Dashboard</Link>
        <Link href = {'/blog'}>Blog</Link>
        {(!(status === 'loading') && !session) && <button onClick = {(event) => {
            event.preventDefault()
            signIn()
        }}>Sign in</button>}
        {session && <button onClick = {event => {
            event.preventDefault()
            signOut()
        }}>Sign out</button>}
    </div>
}