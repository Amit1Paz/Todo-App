import React, { useContext, useRef } from 'react';
import TasksListContext from '../contexts/taskListContext';
import axios from 'axios';

export default function AddBox({ toggleFormSubmit, setToggleFormSubmit }) {
  const [ ,setTaskList] = useContext(TasksListContext);
  const contentRef = useRef();
  const stateRef = useRef();

  const addNewTask = (e) => {
    e.preventDefault();
    e.target.blur();
    const content = contentRef.current.value;
    const state = stateRef.current.checked;

    const task = {
      content: content,
      state: state,
      visible: true
    };

    axios.post('/home', task);
    axios.get('/home')
    .then(res => {
      setTaskList(res.data.map(task => {
        return {
          content: task.content,
          state: task.state,
          visible: true,
          id: task._id
        }
      }))
    });

    e.target.querySelector('input[type=text]').value = '';
    setToggleFormSubmit(!toggleFormSubmit);
  }

  return (
    <form className='add-task-box' onSubmit={addNewTask}>
        <input ref={stateRef} className='task-state-checkbox' id='state' type='checkbox'/>
        <input ref={contentRef} className='task-text' type='text' id='content' placeholder='Create a new todo...' required/>        
    </form>
  )
}