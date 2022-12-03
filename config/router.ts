import { Application } from "express";
import landingRouter from "../routes/landingPage";

const routerConfig = (app: Application) => {
  app.use("/", landingRouter);
};

export default routerConfig;
