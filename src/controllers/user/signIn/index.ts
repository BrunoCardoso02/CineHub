import { Response, Request } from "express";
import { prisma } from '../../../database';
import { compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../../../secrets";

async function signIn(request: Request, response: Response) {
    try {
        const { email, password } = request.body;
        const userExisting = await prisma.user.findFirst({ where: { email } });

        if (!userExisting) {
            return response.status(400).json({
                error: true,
                message: 'Usuário não existe'
            })
        };
        if (!compareSync(password, userExisting.password)) {
            return response.status(400).json({
                error: true,
                message: 'Senha incorreta',
            })
        }
        const token = jwt.sign({
            userId: userExisting.id
        }, JWT_SECRET);

        return response.status(200).json({
            error: false,
            userExisting,
            token
        })
    } catch (err) {
        return response.status(500).json({
            message: err
        })
    }
}

export default signIn