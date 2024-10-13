import { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/tasks");
        const responseObject = await response.json();
        const data = responseObject.data;

        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <main>
      <TaskForm setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default App;
