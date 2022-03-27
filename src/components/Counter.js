import React, { useContext } from 'react';
import TasksListContext from '../contexts/taskListContext';

export default function Counter() {
    const [taskList] = useContext(TasksListContext);

    return <p>{taskList.length} items left</p>
}
