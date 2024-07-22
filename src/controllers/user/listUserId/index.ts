import { Request, Response } from 'express';
import { prisma } from '../../../database';

async function listUserId(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const user = await prisma.user.findUnique({ where: { id: Number(id) } });
        if (!user) {
            return response.status(404).json({
                error: true,
                message: 'Usuário não existe'
            })
        }
        return response.status(200).json({
            error: false,
            data: {
                user
            }
        })
    } catch (err) {
        return response.status(500).json({ message: err })
    }
}

export default listUserId