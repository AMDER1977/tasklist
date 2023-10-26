"use client";
import { MaterialCard } from "./component/MaterialCard";
import { useMaterial } from "./../context/MatContext";

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
