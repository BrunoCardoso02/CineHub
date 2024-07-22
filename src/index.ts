import express from 'express';
import movieRouter from './routes/movie';
import userRouter from './routes/user';

const app = express();
const port = 8000;

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

app.listen(port, () => {
  console.log(`App running on localhost: ${port}`)
});
