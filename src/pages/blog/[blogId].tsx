import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { Session, getServerSession } from "next-auth"
import { getSession, useSession } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]"

type Post = {
    id: number, 
    title: string,
    body: string
}

export default function Blog(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

    // if(status === 'loading') return <div>Loading...</div>

    return <div>
        <div>{props.id}</div>
        <div>{props.title}</div>
        <div>{props.body}</div>
    </div>
}

export const getServerSideProps: GetServerSideProps<Post, { blogId: string }> = async(context) => {

    const session = await getServerSession(context.req, context.res, authOptions) //accesses request
    console.log(session)

    if(session)
    {
        const id = context.params?.blogId
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post: Post = await data.json()
    
        return {
            props: {
                id: parseInt(id as string),
                title: post.title,
                body: post.body,
            }
        }
    }
    return {
        props: {
            id: 0,
            title: 'Free post',
            body: 'This is a free post'
        }
    }
}

