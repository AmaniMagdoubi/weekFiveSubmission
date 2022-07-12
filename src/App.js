import { useState } from 'react'; 
// importing our component into the application and the CSS file 
import './App.css';
import Todo from './ Components/Todo'

const App = () => {
  // a variable that stores tasks and the function which adds the tasks into an array using the state hook
  const [tasks, addTasks] = useState([]); 
  // a variable that stores the input and a function that sets the initial input to an empty string 
  const [input, setInput] = useState(''); 

  // a function to submit tasks to the list and to prevent the page/ tasks from disappearing on re-render using the event object
  const submitHandler = (event) => {
    // prevent re-render 
    event.preventDefault();
    //add tasks to new array from the input ...spread JSX attribute
    addTasks([...tasks, input]);
    //set input to clear on submit
    setInput(''); 
  }; 

  const deleteHandler = (index) => {
    let storedTasks = [...tasks]; 
    storedTasks.splice(index, 1); 
    addTasks(storedTasks); 
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTasks([...tasks, input]); 
      setInput(''); 
    };
  };

  return (
    <div className='App'>
      <header className='Header'>
            <h1>Getting Things Done</h1>
            <h2 className='Slogan'>* write it | track it | do it *</h2>
            <h2 className='List-Name'>Master To-Do List</h2>
      </header>

        
      <div className='Todo-Input'>
        {/* Input element which tracks the changes on input and sets the input using the event object */}
          <input 
            type ='text' 
            placeholder ='add a new task ...'
            value = { input } 
            onKeyDown = { handleKeyDown }
            onChange={ (event) => {
              setInput(event.target.value); 
            }} 
            required
          />
          
        {/* On click event using the anonymous function */}
        <button onClick = { submitHandler } className='Btn-Add-Item'>+</button>
        {tasks.map((task, index) => 
          <Todo 
            key = { task }
            index = { index }
            task = { task }
            deleteHandler = { deleteHandler }
          /> 
        )}
      </div>
    </div>
  );
}

export default App;
