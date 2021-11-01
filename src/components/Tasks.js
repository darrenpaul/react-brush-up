import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      {tasks.length === 0 && <h3>No Tasks To Show</h3>}

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
