"use client";
import { useTasks } from "../context/TaskContext";
import { TaskCard } from "./component/TaskCard";

function HomePage() {
  const { tasks } = useTasks();

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
