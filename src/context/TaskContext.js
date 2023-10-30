"use client"; //**como los contextos pertenecen a React se utilizaria el use client

import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext(); // se ejecuta y se crea un Provider
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a Provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "my first tasks",
      description: "some",
    },
    {
      id: 2,
      title: "second tasks",
      description: "some2",
    },
    {
      id: 1,
      title: "third tasks",
      description: "some3",
    },
    {
      id: 1,
      title: "four tasks",
      description: "some4",
    },
  ]);

  const createTask = (title, description) => {
    setTask([
      ...tasks,
      {
        title,
        description,
        id: uuid(),
      },
    ]);
  };
  const deleteTask = (id) => {
    setTask([...tasks.filter((task) => task.id !== id)]);
  };
  const updateTask = (id) => {
    setTask([...tasks.map(((task) => task.id === id) ? {} : task)]);
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
