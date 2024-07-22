import { Request, Response } from 'express';
import { prisma } from '../../../database';

async function deleteUser(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const isUserExisting = await prisma.user.findUnique({ where: { id: Number(id) } });
        if (!isUserExisting) {
            return response.status(400).json({
                error: true,
                message: 'Usuário não existe'
            })
        }
        const deleteUser = await prisma.user.delete({ where: { id: Number(id) } })
        return response.json({
            error: false,
            message: 'Usuário excluído com sucesso'
        })
    } catch (err) {
        return response.status(500).json({ message: err })
    }
}

export default deleteUser