import classes from "./TaskItem.module.css";

const TaskItem = ({ task, setTasks }) => {
  const taskDeleteHandler = () => {
    try {
      const response = fetch(`http://localhost:5000/api/v1/tasks/${task._id}`, {
        method: "DELETE",
      });

      setTasks((prevTasks) =>
        prevTasks.filter((taskItem) => taskItem._id !== task._id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes["task-container"]}>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <button className={classes.button} onClick={taskDeleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
