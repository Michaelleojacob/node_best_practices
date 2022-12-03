import express from "express";
import middlewareConfig from "./config/config";
import routerConfig from "./config/router";

const app = express();

middlewareConfig(app);
routerConfig(app);

export default app;
