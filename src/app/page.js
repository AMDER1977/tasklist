"use client";
import { MaterialCard } from "./component/MaterialCard";
import { useMaterial } from "../context/TaskContext";

function HomePage() {
  const { materiales } = useMaterial();
  return (
    <div>
      {materiales.map((material) => (
        <MaterialCard key={material.id} material={material} />
      ))}
    </div>
  );
}

export default HomePage;
