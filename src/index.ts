import express, {Request, Response} from 'express';
import UserController from './controllers/UserController';
import MovieController from './controllers/MovieController';

const app = express();
const port = 8000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello world',
  });
});

app.post('/createUser', UserController.createUser);
app.get('/listUsers', UserController.getUser);
app.get('/listUser/:id', UserController.getUserId);
app.post('/createMovie', MovieController.createMovie);
app.get('/listMovies', MovieController.listMovies);
app.post('/signIn', UserController.authUser);
app.delete('/deleteUser/:id', UserController.deleteUser);

app.listen(port, () => {
  console.log(`App running on localhost: ${port}`)
});
