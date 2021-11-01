const initialState = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Learn React",
    day: "Feb 7th at 1:30pm",
    reminder: false,
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_REMINDER_TASK":
      return state.map((task) => {
        console.log(task.id, action.payload);
        if (task.id === action.payload) {
          return { ...task, reminder: !task.reminder };
        }
        return task;
      });
    case "TOGGLE_ADD_TASK":
      return !state;
    default:
      return state;
  }
}
