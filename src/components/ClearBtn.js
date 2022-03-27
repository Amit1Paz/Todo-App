import React, { useContext } from 'react';
import TasksListContext from '../contexts/taskListContext';
import axios from 'axios';

export default function ClearBtn() {
    const [taskList, setTaskList] = useContext(TasksListContext);
    
    const clearCompletedHandler = (e) => {
        e.target.blur();

        const complitedList = taskList.filter(task => task.state === true);
        const incomplitedList = taskList.filter(task => task.state === false);
        
        complitedList.map(task => {
            return axios.delete(`/home/${task.id}`);
        })
    
        setTaskList(incomplitedList);
    }

    return <button onClick={clearCompletedHandler} className='clear-tasks-btn'>
        Clear Completed
    </button>
}
