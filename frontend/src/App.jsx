import { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/tasks?page=${page}&limit=10`
        );
        const responseObject = await response.json();
        const data = responseObject.data;

        setHasNextPage(responseObject.pagination.hasNextPage);
        setTasks((prevTasks) => [...prevTasks, ...data]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [page]);

  return (
    <main>
      <TaskForm setTasks={setTasks} />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
    </main>
  );
}

export default App;
