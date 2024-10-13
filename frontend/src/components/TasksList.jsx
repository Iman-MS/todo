import TaskItem from "./TaskItem";

import classes from "./TasksList.module.css";

const TasksList = ({ tasks, setTasks }) => {
  return (
    <div className={classes["tasks-container"]}>
      {tasks &&
        tasks.map((task, i) => (
          <TaskItem key={i} task={task} setTasks={setTasks} />
        ))}
    </div>
  );
};

export default TasksList;
