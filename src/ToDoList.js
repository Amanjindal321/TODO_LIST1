import React from "react";

const ToDoList = (props) => {
    const handleRemove = () => {
        props.onRemove(props.text);
    }
    
    return (
        <>
        
         <li> {props.text}{" "}
              <button onClick={handleRemove} className="delete">-</button>
         
         </li>
        </>
    );
};

export default ToDoList;