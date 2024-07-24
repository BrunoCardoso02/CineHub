import { Router } from "express";
import createMovie from "../../controllers/movie/createMovie";
import listMovie from "../../controllers/movie/listMovie";
import authValidate from "../../middleware/auth";

const movieRouter: Router = Router()

movieRouter.post('/createMovie', authValidate, createMovie);
movieRouter.get('/listMovies', authValidate, listMovie)

export default movieRouter;
