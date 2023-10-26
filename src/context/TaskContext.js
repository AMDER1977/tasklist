"use client"; //**como los contextos pertenecen a React se utilizaria el use client
//!EL CONTEXT ES UN COMPONENTE QUE ENGLOBA TODA LA APP Y PERMITE A OTROS COMPONENTES ACCEDER A UN VALOR SIN NECESIDAD DE QUE SEAN PASADOS POR PROPS.
//*se crean componentes que todas las paginas usen (logins o interactividad)
import { createContext, useContext } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext(); // se ejecuta y se crea un Provider

export const TaskProvider = ({ children }) => {
  const tasks = [];

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};
