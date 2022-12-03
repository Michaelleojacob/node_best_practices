import express from "express";
const landingRouter = express.Router();

landingRouter.get("/", (req, res) => {
  return res.status(200).json({ info: "welcome to the landing page" });
});

export default landingRouter;
