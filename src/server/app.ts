import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import { HelloRouter } from "./routes/index.js";
config();

const app: Express = express();
const port = process.env.SERVER_PORT || 3000;
const host = process.env.SERVER_HOST || "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default function startServer() {
  // Base route
  app.get("/", (req: Request, res: Response) => {
    res.send("hi");
  });

  app.use("/hello", HelloRouter());
  // Middleware for error handling
  app.use((err: any, req: Request, res: Response, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Internal Server Error" });
  });

  // Unhandled route
  app.use((req: Request, res: Response) => {
    res.status(404).send({ error: "Not Found" });
  });

  // Startup
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://${host}:${port}`);
  });
}
