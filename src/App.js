import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor appointment',
        day: 'Saturday 5th July',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctor appointment 2',
        reminder: false,
    },
    {
        id: 3,
        text: 'Doctor appointment 3',
        day: 'Saturday 7th July',
        reminder: true,
    }

])

// Delete Task
const deleteTask = (id) => {
  console.log('delete', id);
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  console.log('inside addTask >>', id);

  const newTask = {id, ...task };
  setTasks([...tasks, newTask]);
}

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
