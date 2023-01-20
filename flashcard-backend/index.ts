import express, { Express, Request, Response } from 'express';
import bodyParser from'body-parser';
import dotenv from 'dotenv';
import deckRouter from './routes/decks';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/decks', deckRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});