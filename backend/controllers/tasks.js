import Task from "../models/Task.js";

import asyncHandler from "../utils/async.js";

export const getAllTasks = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: "get all tasks" });
});

export const createTask = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: "create a task" });
});

export const updateTask = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: "update a task" });
});

export const deleteTask = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: "delete a task" });
});
