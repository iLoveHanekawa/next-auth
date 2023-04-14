// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

type Data = {
  name: string
} | {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const session = await getServerSession(req, res, authOptions)

  if(!session) {
    res.status(401).json({ error: "Unauthorized" })
  }

  console.log(process.env.GITHUB_SECRET)
  res.status(200).json({ name: 'John Doe' })
}
