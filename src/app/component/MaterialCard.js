import { useRouter } from "next/navigation";
import { useMaterial } from "../../context/MatContext";

export const MaterialCard = ({ material }) => {
  const router = useRouter();
  const { deleteMat } = useMaterial();
  return (
    <div
      style={{ background: "#202020", color: "yellowgreen" }}
      onClick={() => {
        router.push(`/api/edit/${material.id}`);
      }}
    >
      <h1>{material.title}</h1>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const confirmDelete = window.confirm(
            "¿Are you sure you want to delete this material?"
          );
          if (confirmDelete) {
            deleteMat(material.id);
          }
        }}
      >
        Delete
      </button>
      <p>{material.description}</p>
    </div>
  );
};
