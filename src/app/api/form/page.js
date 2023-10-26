"use client";

import React from "react";
import { useMaterial } from "../../../context/MatContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Form({ params }) {
  const [material, setMaterial] = useState({
    title: "", // Cambiar "title" por "name"
    description: "",
  });
  const { materiales, createMat, updateMat } = useMaterial();
  const router = useRouter();

  const handleChange = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateMat(params.id, material);
    } else {
      createMat(material.title, material.description);
    }

    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const materialFind = materiales.find(
        (material) => material.id === params.id
      );
      if (materialFind) {
        setMaterial({
          title: materialFind.name, // Cambiar "title" por "name"
          description: materialFind.description,
        });
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label className="formName">Material:</label>
      <input
        autoComplete="off"
        type="text"
        name="title" // Cambiar "name" por "title"
        placeholder="Ingrese Material"
        onChange={handleChange}
        value={material ? material.title : ""} // Cambiar "name" por "title"
        required
      />
      <label className="formTipo">Descripcion:</label>
      <textarea
        autoComplete="off"
        type="text"
        name="description"
        placeholder="Ingrese Descripcion"
        onChange={handleChange}
        value={material ? material.description : ""}
        required
      />
      <button>Save</button>
    </form>
  );
}

// import React from "react";
// import { useMaterial } from "../../../context/MatContext";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Form({ params }) {
//   const [material, setMaterial] = useState({
//     title: "",
//     description: "",
//   });
//   const { materiales, createMat, updateMat } = useMaterial();
//   const router = useRouter();

//   const handleChange = (e) => {
//     setMaterial({ ...material, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (params.id) {
//       updateMat(params.id, material);
//     } else {
//       createMat(material.title, material.description);
//     }

//     router.push("/");
//   };

//   useEffect(() => {
//     if (params.id) {
//       //const materialFind = materiales.find(material.id === params.id);
//       const materialFind = materiales.find(
//         (material) => material.id === params.id
//       );
//       if (materialFind)
//         setMaterial(materialFind.name, materialFind.description);
//     }
//   }, []);

//   return (
//     <form onSubmit={handleSubmit}>
//       <label className="formName">Material:</label>
//       <input
//         autoComplete="off"
//         type="text"
//         name="name"
//         placeholder="Ingrese Material"
//         onChange={handleChange}
//         value={material ? material.name : ""}
//         required
//       />
//       <label className="formTipo">Descripcion:</label>
//       <textarea
//         autoComplete="off"
//         type="text"
//         name="description"
//         placeholder="Ingrese Descripcion"
//         onChange={handleChange}
//         value={material ? material.description : ""}
//         required
//       />
//       <button>Save</button>
//     </form>
//   );
// }

// //exports  { Form };
