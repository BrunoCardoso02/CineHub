import { Request, Response } from "express";
import { prisma } from "../../../database";

async function createMovie(request: Request, response: Response) {
    try {
        const { name, gender, sinopse, year } = request.body;
        const { authorization } = request.headers;
        const movieExists = await prisma.movies.findUnique({ where: { name } });
        if (movieExists) {
            return response.status(409).json({
                error: true,
                message: 'Filme já cadastrado!',

            });
        } else if(!authorization) {
            return response.status(401).json({
                error: true,
                message: 'Usuário não autorizado!',

            });
        };
        const newMovie = await prisma.movies.create({
            data: {
                name,
                gender,
                sinopse,
                year
            },
        });
        return response.status(201).json({
            error: false,
            message: 'Filme cadastrado com sucesso!',
            newMovie
        })
    } catch (err) {
        return response.status(500).json({
            message: 'Erro ao enviar requisição!', err
        })
    }
}

export default createMovie