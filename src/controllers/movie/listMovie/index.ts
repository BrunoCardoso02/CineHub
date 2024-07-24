import { Request, Response } from "express";
import { prisma } from "../../../database";

async function listMovie(request: Request, response: Response) {
    try {
        const listMovies = await prisma.movies.findMany();
        const { authorization } = request.headers;
        if(!authorization) {
            return response.status(401).json({
                error: true,
                message: 'Usuário não autorizado!'
            })
        }
        return response.status(200).json({
            error: false,
            listMovies,
        });
    } catch (err) {
        return response.status(500).json({
            message: 'Erro ao enviar requisição!', err
        })
    }
}

export default listMovie;