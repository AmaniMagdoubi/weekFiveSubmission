import { useState } from 'react'; 
// importing our 3 created components into the application
import './App.css';

const App = () => {
  // current state // function to dynamically update the current item // current item is initially set to null
  const [currentItem, setCurrentItem] = useState(''); 
  const [itemList, updateItemList] = useState([])

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  }; 

  const addItemToList = (event) => {
    event.preventDefault();
    // spread operator adds an item to the existing array // current item updated to the list 
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    // to clear the current item once submitted 
    setCurrentItem(''); 
    console.log(itemList)
  }

  return (
    <div>
      <header>
            <h1>Getting Things Done</h1>
            <h2>* write it | track it | do it *</h2>
            <h2>Master To-Do List</h2>
      </header>

      <form>
        <div className='Todo-Input'>
          <input 
            type='text' 
            value= { currentItem } 
            onChange={ onChangeHandler }
            required
          />

          <button onClick = { addItemToList }>+</button>

        </div>
      </form>
      
      <div>
      { itemList.map((item, index) => (
          <h1>{item}</h1>
        )) }
      </div>
    </div>
  );
}

export default App;
