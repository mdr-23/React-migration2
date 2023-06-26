import { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState([])
  const [taskList, setTaskList] = useState([])

  const handleInput = (e) => {
    const inputTask = e.target.value
    if(inputTask !== ""){
      setTask(inputTask)
    }
  }
  
  const addTask = (e) => {
    if(task !== ""){
      e.preventDefault()
      setTaskList([...taskList, task])
      setTask('')
    }
  }

  return (
    <div className="App">

        <h1>Lista de Tareas</h1>

        <form id="addTaskForm" onSubmit={addTask}>
          <input type="text" id="taskInput" placeholder="Nueva tarea" onChange={handleInput} />
          <button type="submit">Agregar tarea</button>
        </form>

        <ul id="taskList">
          {taskList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

    </div>
  );
}

export default App;
