import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/actions";

const AddTask = () => {
  const dispatch = useDispatch();

  const { addTask } = bindActionCreators(actionCreators, dispatch);

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if(!text){
        alert("Please enter a task");return;
    }

    const id = Math.floor(Math.random() * 100000) + 1;

    addTask({text, day, reminder, id});

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-name">Task</label>
        <input
          type="text"
          name="task-name"
          placeholder="Add Task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="day-time">Day & Time</label>
        <input
          type="text"
          name="day-time"
          placeholder="Add Day & Time"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          name="reminder"
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
