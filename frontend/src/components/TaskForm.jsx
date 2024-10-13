import { useState } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
    };

    try {
      const response = await fetch("http://localhost:5000/api/v1/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setTasks((prevValue) => [...prevValue, data]);

      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Enter a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          placeholder="Enter a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className={classes.button} type="submit">
        Add!
      </button>
    </form>
  );
};

export default TaskForm;
