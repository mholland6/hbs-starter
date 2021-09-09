import express from "express";
import { assignments } from "../models/assignment-db";
import { calculateAverage } from "../models/calculateAverage";

const routes = express.Router();

routes.get("/api/assignments", (req, res) => {
  res.json(assignments);
  res.status(200);
});
routes.get("/api/summary", (req, res) => {
  const average = calculateAverage(assignments);
  const newOjb = {
    overallAverage: average,
    assignments: assignments
  }
  res.json(newOjb);
  res.status(200);
});

export default routes;