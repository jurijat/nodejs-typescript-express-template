import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { HelloHandler } from "../../handlers/helloHandler.js";
import { catchAsync } from "../middlewares/error.js";

export function getRoutes(): Router {
  const router = Router();

  const helloHandler = new HelloHandler();

  const nameValidationRules = [body("name").notEmpty().isString()];

  router.get("/", nameValidationRules, async (req: Request, res: Response) => {
    res.status(200).json(helloHandler.sayWhoAreYou());
  });

  router.post(
    "/hi",
    nameValidationRules,
    catchAsync(async (req: Request, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name } = req.body;
      const hiText = helloHandler.sayHi(name);

      res.status(201).json(hiText);
    })
  );

  router.post(
    "/bye",
    nameValidationRules,
    catchAsync(async (req: Request, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name } = req.body;
      const hiText = helloHandler.sayBye(name);

      res.status(201).json(hiText);
    })
  );

  return router;
}
