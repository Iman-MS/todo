import { useEffect, useRef } from "react";

import TaskItem from "./TaskItem";

import classes from "./TasksList.module.css";

const TasksList = ({ tasks, setTasks, setPage, hasNextPage }) => {
  const loadMoreTasks = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && hasNextPage) {
          setPage((prevValue) => prevValue + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loadMoreTasks.current) observer.observe(loadMoreTasks.current);

    return () => {
      if (loadMoreTasks.current) observer.unobserve(loadMoreTasks.current);
    };
  }, [setPage, hasNextPage]);

  return (
    <div className={classes["tasks-container"]}>
      {tasks &&
        tasks.map((task, i) => (
          <TaskItem key={i} task={task} setTasks={setTasks} />
        ))}
      <div ref={loadMoreTasks} />
    </div>
  );
};

export default TasksList;
