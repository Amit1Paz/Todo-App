import React, { useContext } from 'react';
import TasksListContext from '../contexts/taskListContext';
import axios from 'axios';

export default function Task({ task }) {
    const [taskList, setTaskList] = useContext(TasksListContext);
    
    const changeStateHandler = (id) => {
        const newTaskList = [...taskList];      
        for (let i = 0; i < newTaskList.length; i++) {
            if (newTaskList[i].id === id) {
                newTaskList[i].state = !newTaskList[i].state;
            }
        }
        axios.put(`/home/${id}`, {state: task.state});
        
        return setTaskList(newTaskList);
    }

    return <div className='task'>
        <input
        className='task-state-checkbox'
        id='state'
        type='checkbox'
        checked={task.state}
        onChange={() => changeStateHandler(task.id)}/>

        <p>{task.content}</p>
    </div>
}
