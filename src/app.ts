import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  const a = 50;
  res.send(a);
};

app.get("/", getAController);

export default app;
