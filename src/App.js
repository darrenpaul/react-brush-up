import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div>
      <div className="container">
        <Header
          title="Task Tracker"
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
        />

        {showAddTask && <AddTask show />}

        <Tasks />
      </div>
    </div>
  );
};

export default App;
