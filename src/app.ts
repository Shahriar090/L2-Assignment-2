import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { routerFromUserRoute } from "./app/modules/users/user.route";

// parsers
app.use(express.json());
app.use(cors());

// application route

app.use("/api/v1/users", routerFromUserRoute);

const getAController = (req: Request, res: Response) => {
  const a = 5;
  res.send(String(a));
};
app.get("/", getAController);

export default app;
