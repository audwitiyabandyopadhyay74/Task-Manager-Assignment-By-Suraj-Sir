import express from "express";

import {
  AddTaskcontroller,
  FetchTaskcontroller,
  MarkAsDonecontroller,
  DeleteTaskcontroller,
} from "../controllers/task.controller.js";
import { isloggedin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/Add", isloggedin, AddTaskcontroller);
router.post("/Fetch", isloggedin, FetchTaskcontroller);
router.post("/MarkAsDone", isloggedin, MarkAsDonecontroller);
router.post("/Delete", isloggedin, DeleteTaskcontroller);

export default router;
