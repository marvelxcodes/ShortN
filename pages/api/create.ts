import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../libs/prisma'

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {} = req.body
    
    res.status(200).json({status: "Sucess"})
}