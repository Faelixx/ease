import React from "react";
import { useState } from "react";
import RemoveTask from "./buttons/RemoveTask";
import Checkbox from "./buttons/Checkbox";
import '../styles/CSS/ListItems.css';
import { ReactComponent as UpdateButton } from '../assets/UpdateButton.svg';

const ListItem = (props) => {

  const {
    value, 
    task, 
    key, 
    handleAdd, 
    handleComplete, 
    handleDelete, 
    setTasks, 
    setValue, 
    handleUpdate, 
    complete, 
    setComplete,
    sortedTasks,
  } = props;

  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleEdit = (id) => {
    setEdit(true);
  }

  const handleSubmit = (e) => {
    console.log('submitted')
    e.preventDefault();
    if(edit) {
      handleUpdate(task.task_id, editValue); // Assuming `handleUpdate` and `value` are received via props
      setEdit(false); // Exiting edit mode
    }
  }


  return (
    <div className="list-item-container">
      <div><Checkbox handleComplete={handleComplete} task_id={task.task_id}/></div>
      {edit 
      ? <div className="edit-form-div-container">
          <form onSubmit={handleSubmit} className="edit-form-container">
            <input 
            value={editValue}
            autoFocus 
            onBlur={handleSubmit}
            onChange={e => setEditValue(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}><UpdateButton className="update-button"/></button>
          </form>
        </div>
      : <div 
          className={task.completed?"list-item-title-strike":"list-item-title"} 
          onClick={() => handleEdit(task.task_id)}> 
          {task.title} P - 
          {task.priority} 
        </div>
      }
      
      <div className="remove-task"><RemoveTask handleDelete={handleDelete} task_id={task.id}/></div>
      
     
    </div>
  );
};

export default ListItem;