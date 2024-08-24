import Searchbar from './Serchbar';
import './Todolist.css';
import React, { useState } from 'react';

import './Searchbar.css'
import Add from './Add';
import './Add.css';
import Todo from './Todo';

function Todolist() {
    const [tasks, setTasks] = useState([]); // State to manage the list of tasks
    const [inputValue, setInputValue] = useState(''); // State to manage the input value
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value); // Update input value as the user types
    };
  
    const handleAddTask = () => {
      if (inputValue.trim() !== '') { // Check if the input is not empty
        setTasks([...tasks, inputValue]); // Add the new task to the list
        setInputValue(''); // Clear the input field
      }
    };
  
    const handleRemoveTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index); // Remove the task by index
      setTasks(newTasks); // Update the tasks list
    };
  
    return (
      <div className="todolist">
        <p id="title">To Do List</p>
        <Searchbar value={inputValue} onChange={handleInputChange} />
        <Add onClick={handleAddTask} />
        {tasks.map((task, index) => (
          <Todo key={index} task={task} onRemove={() => handleRemoveTask(index)} />
        ))}
      </div>
    );
  }
  
  export default Todolist;