import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';

import React, {useState ,useEffect} from 'react';

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else {
    return [];
  }
}


function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState(getLocalItems);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofitems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");

  };

  const removeActivity = (itemToRemove) =>{
    setItems((oldItems) => {
      return oldItems.filter((item) => item !== itemToRemove);
    });

  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
}, [items]);
  
  

  return (
    <div className="App">
      <div className="appcenter_div">
        <br />
        <h1> Todo list</h1>
        <br />
        <input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent}/>
        <button onClick={listofitems}> + </button>


        <ol>
         {/* <li> {inputList} </li> */}

          {items.map((itemval, index) => {
            return (
               <ToDoList key={index} text={itemval} index={index} onRemove={removeActivity}/>
            );
          })}
          

        </ol>


      </div>
        
        <p>
          <code></code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      
    </div>
  );
}

export default App;
