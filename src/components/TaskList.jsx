import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  const updateTask = (TaskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTasks((prev) =>
      prev.map((item) => (item.id === TaskId ? newValue : item))
    );
  };

  const removeTask = (id) => {
    const removeArr = [...tasks].filter((task) => task.id !== id);

    setTasks(removeArr);
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tasks For Today</h1>
      <TaskForm onSubmit={addTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default TaskList;
