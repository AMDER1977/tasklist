"use client"; //**como los contextos pertenecen a React se utilizaria el use client
//!EL CONTEXT ES UN COMPONENTE QUE ENGLOBA TODA LA APP Y PERMITE A OTROS COMPONENTES ACCEDER A UN VALOR SIN NECESIDAD DE QUE SEAN PASADOS POR PROPS.
//*se crean componentes que todas las paginas usen (logins o interactividad)
import { createContext, useContext } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext(); // se ejecuta y se crea un Provider
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a Provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [
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
  ];

  return (
    <TaskContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
