import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { Application } from "express";

const errorConfig = (app: Application) => {
  app.use(
    (
      err: ErrorRequestHandler,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      // whenever you call next(err), this middleware will handle the error
      // always logs the error
      console.error("ERROR", req.method, req.path, err);

      // only render if the error ocurred before sending the response
      if (!res.headersSent) {
        res.status(500).render("error");
      }
    }
  );
};

export default errorConfig;
