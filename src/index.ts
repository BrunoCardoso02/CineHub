import express, {Request, Response} from 'express';

const app = express();
const port = 8000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello world',
  });
});

app.listen(port, () => {
  console.log(`App running on localhost: ${port}`)
});
