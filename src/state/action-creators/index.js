export const addTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };
};

export const removeTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: task,
    });
  };
};

export const toggleReminderTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_REMINDER_TASK",
      payload: task,
    });
  };
};

export const toggleAddTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_ADD_TASK",
      payload: task,
    });
  };
};
