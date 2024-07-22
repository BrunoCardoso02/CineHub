import { Request, Response } from 'express';
import { prisma } from '../../../database';

async function listUser(request: Request, response: Response) {
        try {
            const users = await prisma.user.findMany();

            return response.status(200).json({
                error: false,
                data: {
                    users
                }
            })
        } catch (err) {
            return response.status(500).json({ message: err })
        }
    };

export default listUser