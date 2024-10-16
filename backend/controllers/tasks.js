import Task from "../models/Task.js";

import asyncHandler from "../utils/async.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getAllTasks = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  const tasks = await Task.find()
    .skip(limit * (page - 1))
    .limit(limit);

  const total = await Task.countDocuments();
  const totalPages = Math.ceil(total / limit);

  res.status(200).json({
    success: true,
    data: tasks,
    pagination: {
      totalTasks: total,
      currentPage: page,
      totalPages,
      limit,
      hasNextPage: page < totalPages,
    },
  });
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
