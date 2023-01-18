import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () => {

  const[inputList,setInputList]=useState('');
  const[items,setItems]=useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);

  };
  const listOfItems = () =>{
    setItems((olditems) => {
      return [...olditems,inputList];
    })
    setInputList('');

  };

  const deleteItems = (id) =>{
 
    setItems((olditems) =>{
      return olditems.filter((arr,index) =>{

        return index !== id;

      })
    })
    
  }

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder='Add Items' value={inputList}  onChange={itemEvent}/>
          <button onClick={listOfItems}>+</button>

          <ol>
            
            {items.map((itemValue,index)=>{
              return <Todolist key={index} id={index} text={itemValue}  onSelect={deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;