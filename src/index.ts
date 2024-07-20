import express, {Request, Response} from 'express';
import UserController from './controllers/UserController';

const app = express();
const port = 8000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello world',
  });
});

app.post('/createUser', UserController.createUser);
app.get('/listUsers', UserController.getUser)

app.listen(port, () => {
  console.log(`App running on localhost: ${port}`)
});
