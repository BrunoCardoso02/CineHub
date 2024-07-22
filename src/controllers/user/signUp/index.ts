import { Request, Response } from 'express';
import { prisma } from '../../../database';
import { hashSync } from 'bcrypt';

async function signUp(request: Request, response: Response) {
    try {
        const { name, email, password, } = request.body;
        const userExists = await prisma.user.findUnique({ where: { email } });
        if (userExists) {
            return response.status(409).json({
                error: true,
                message: 'Usuário já cadastrado'
            });
        }
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashSync(password, 10),
            }
        });
        return response.status(201).json({
            error: false,
            message: 'Usuário cadastrado!!',
            newUser
        })
    } catch (err) {
        return response.status(500).json({ message: err });
    }
}

export default signUp