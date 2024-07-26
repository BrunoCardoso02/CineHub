import {Request, Response, Router } from "express";
import createMovie from "../../controllers/movie/createMovie";
import listMovie from "../../controllers/movie/listMovie";
import authValidate from "../../middleware/auth";
import { upload } from "../../middleware/upload";

const movieRouter: Router = Router()
const uploadImgUser = upload;

movieRouter.post('/createMovie', authValidate, createMovie);
movieRouter.get('/listMovies', authValidate, listMovie);
movieRouter.post('/uploadImage',  uploadImgUser.single('image') ,async (request: Request, response: Response) => {
    return response.send({
        message: 'Imagem enviada'
    })
})

export default movieRouter;
