import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add the tasks title"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Please add the tasks description"],
  },
});

export default mongoose.model("Task", TaskSchema);
