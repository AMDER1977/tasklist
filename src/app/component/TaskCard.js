import { useRouter } from "next/navigation";
import { useTasks } from "../../context/TaskContext";

export const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div
      style={{ background: "#202020", color: "yellowgreen" }}
      onClick={() => {
        router.push(`/edit/${task.id}`);
      }}
    >
      <h1>{task.title}</h1>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const confirmDelete = window.confirm(
            "¿Are you sure you want to delete this Task?"
          );
          if (confirmDelete) {
            deleteTask(task.id);
          }
        }}
      >
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  );
};
