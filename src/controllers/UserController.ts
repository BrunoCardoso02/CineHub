import { Request, Response } from 'express'
import { prisma } from './database';

export default {
    async createUser(request: Request, response: Response) {
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
                    password,
                }
            });
            return response.status(201).json({
                error: false,
                message: 'Usuário cadastrado!!',
                newUser
            })
        } catch (err) {
            return response.json({ message: err });
        }
    }
};