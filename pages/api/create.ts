import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../libs/prisma'

export default async function create (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method==="POST") {
        const { id, url} = req.body
        await prisma.uRL.create({
            data: {
                id, url
            }
        })
        await res.status(200).json({status: "Sucess"})
    } else {
        await res.send("Only POST method is Allowed in this endpoint!")
    }
}