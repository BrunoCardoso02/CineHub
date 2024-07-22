import { Router } from "express";
import createMovie from "../../controllers/movie/createMovie";
import listMovie from "../../controllers/movie/listMovie";

const movieRouter: Router = Router()

movieRouter.post('/createMovie', createMovie);
movieRouter.get('/listMovies', listMovie)

export default movieRouter;
