import Task from "../models/Task.js";

import asyncHandler from "../utils/async.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getAllTasks = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find();

  res.status(200).json({ success: true, data: tasks });
});

export const createTask = asyncHandler(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(200).json({ success: true, data: task });
});

export const updateTask = asyncHandler(async (req, res, next) => {
  const { taskId } = req.params;

  const task = await Task.findById(taskId);

  if (!task)
    return next(new ErrorResponse(`No task with the id of ${taskId}`, 404));

  const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: updatedTask });
});

export const deleteTask = asyncHandler(async (req, res, next) => {
  const { taskId } = req.params;

  const task = await Task.findById(taskId);

  if (!task)
    return next(new ErrorResponse(`No task with the id of ${taskId}`, 404));

  await task.deleteOne();

  res.status(200).json({ success: true, data: task });
});
