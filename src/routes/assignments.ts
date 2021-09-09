import express from "express";
import Assignment from "../models/Assignment";
import { addAssignment, assignments } from "../models/assignment-db";
import { calculateAverage } from "../models/calculateAverage";

const routes = express.Router();

routes.post("/add-assignment", (req, res) => {
  const newAssignment: Assignment = {
    assignment: req.body.assignmentName,
    score: req.body.yourScore,
    total: req.body.totalPossibleScore,
    completed: !!req.body.completed
  }
  addAssignment(newAssignment);
  calculateAverage(assignments);
  res.render("add-assignment-form-submission", {newAssignment});
});

export default routes;