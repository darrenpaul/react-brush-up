import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/actions";
import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const { removeTask, toggleReminderTask } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminderTask(task.id)}
    >
      <h3>
        {task.text}

        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => removeTask(task.id)}
        />
      </h3>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
