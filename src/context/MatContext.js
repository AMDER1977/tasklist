"use client"; //**como los contextos pertenecen a React se utilizaria el use client
//!EL CONTEXT ES UN COMPONENTE QUE ENGLOBA TODA LA APP Y PERMITE A OTROS COMPONENTES ACCEDER A UN VALOR SIN NECESIDAD DE QUE SEAN PASADOS POR PROPS.
//*se crean componentes que todas las paginas usen (logins o interactividad)
import { createContext, useContext } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const MaterialContext = createContext(); // se ejecuta y se crea un Provider

//?se crea un hook para utilizar
export const useMaterial = () => {
  const data = useContext(MaterialContext);
  if (!data) throw new Error("useMaterial must used within a  Provider");
  return data;
};

//en el provider envuelve toda la app y se reciben las diferentes paginas como elementos hijos
export const MaterialProvider = ({ children }) => {
  const [materiales, setMateriales] = useState([]);

  //   const materiales =
  const createMat = (title, description) => {
    const newMaterial = {
      title,
      description,
      id: uuid(), // Asignamos un nuevo ID basado en la longitud actual del array
    };

    setMateriales([...materiales, newMaterial]);
  };

  const deleteMat = (id) =>
    setMateriales([...materiales.filter((material) => material.id !== id)]);

  const updateMat = (id, newDataMat) => {
    setMateriales([
      ...materiales.map((material) =>
        material.id === id ? { ...material, ...newDataMat } : material
      ),
    ]);
  };
  return (
    <MaterialContext.Provider
      value={{
        materiales,
        createMat,
        deleteMat,
        updateMat,
      }}
    >
      {children}
    </MaterialContext.Provider>
  );
};
