import React, { useContext } from 'react';
import Task from './Task';
import TasksListContext from '../contexts/taskListContext';

export default function TaskList() {
  const [taskList] = useContext(TasksListContext);

  return <ul className='task-list'>
    {taskList.map(task => {
      if (task.visible) {
        return <li key={task.id}>
            <Task task={task}/>
          </li>
      }
      return null;
    })}
  </ul>
}