import express from "express";

import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:taskId").put(updateTask).delete(deleteTask);

export default router;
