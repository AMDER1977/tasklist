"use client";
import { useEffect, useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";

function Page({ params }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { tasks, createTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      console.log("editing");
    } else {
      createTask(task.title, task.description);
    }

    router.push("/");
  };
  useEffect(() => {
    if (params.id) {
      const taskId = tasks.find((task) => task.id === params.id);
      if (taskId) setTask(taskId.title, taskId.description);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Write a title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Add Description"
        onChange={handleChange}
        value={task.description}
      />
      <button>Save</button>
    </form>
  );
}

export default Page;
