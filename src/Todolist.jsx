import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const Todolist = (props) => {

  

    return (
      <>
       <div className='todo_style'>
           <FaTimesCircle className='fa-times' onClick={() => {
               props.onSelect(props.id);
           }}/>
           <li>{props.text}</li>
       </div>
      </>
    );

}
export default Todolist;