import express, { Application } from "express";
import morgan from "morgan";

const middlewareConfig = (app: Application) => {
  app.use(morgan("short"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

export default middlewareConfig;
