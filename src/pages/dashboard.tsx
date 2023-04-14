import { useSession, signIn } from "next-auth/react"

export default function Dashboard() {

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn('github')
        },
    })

    if(status === 'loading') return <div>Loading...</div>

    return <div>Dashboard</div>
}