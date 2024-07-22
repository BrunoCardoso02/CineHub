import { Request, Response } from 'express'
import { prisma } from './database';
import * as jwt from 'jsonwebtoken';
import { compareSync } from 'bcrypt';

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
            return response.status(500).json({ message: err });
        }
    },
    async getUser(request: Request, response: Response) {
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
    },
    async getUserId(request: Request, response: Response) {
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
    },

    async deleteUser(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const isUserExisting = await prisma.user.findUnique({ where: { id: Number(id) } });
            if(!isUserExisting) {
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
    },


};