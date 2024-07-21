import { Request, Response } from 'express';
import { prisma } from './database';

export default {
    async createMovie(request: Request, response: Response) {
        try {
            const { name, gender, sinopse, year } = request.body;
            const movieExists = await prisma.movies.findUnique({ where: { name } });
            if (movieExists) {
                return response.status(409).json({
                    error: true,
                    message: 'Filme já cadastrado!',

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
    },

    async listMovies(request: Request, response: Response) {
        try {
            const listMovies = await prisma.movies.findMany();
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
}