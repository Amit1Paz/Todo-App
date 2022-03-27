import React, { useContext, useEffect, useState } from 'react';
import TasksListContext from '../contexts/taskListContext';
import { v4 as uuidv4 } from 'uuid';
 
export default function Sort({ toggleFormSubmit }) {
    const [taskList, setTaskList] = useContext(TasksListContext);

    const sortClassName = `sort-list__option`;
    const selectedSortClassName = 'sort-list__option--selected';
    
    const [sortOptions, setSortOptions] = useState([
        {text: 'All', className: selectedSortClassName},
        {text: 'Active', className: sortClassName},
        {text: 'Completed', className: sortClassName}
    ]);
    const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0].text);
    
    const selectSortOptionHandler = (option) => {
        return setSelectedSortOption(option);
    }

    const changeSelectedStyle = () => {
        const newSortOptions = [...sortOptions];
        newSortOptions.map(option => option.className = sortClassName);
        for (let i = 0; i < newSortOptions.length; i++) {
            if (newSortOptions[i].text === selectedSortOption) {
               return newSortOptions[i].className = selectedSortClassName;
            }
        }
        return setSortOptions(newSortOptions);
    }

    const toggleVisiblity = (state) => {
        const newTaskList = [...taskList];
        newTaskList.map(task => {
            if (task.state === state) {
                return task.visible = true;
            } else {
                return task.visible = false;
            }
        });
    }

    const changeVisibleState = () => {
        const newTaskList = [...taskList];
        if (selectedSortOption === sortOptions[0].text) {
            newTaskList.map(task => task.visible = true);
            return setTaskList(newTaskList);
        } else if (selectedSortOption === sortOptions[1].text) {
            toggleVisiblity(false);
            return setTaskList(newTaskList);
        } else {
            toggleVisiblity(true);
            return setTaskList(newTaskList);
        }
    }

    useEffect(() => {
        changeSelectedStyle();
        changeVisibleState();
    }, [selectedSortOption]);

    useEffect(() => {
        setSelectedSortOption(sortOptions[0].text);
    }, [toggleFormSubmit]);

    return <ul className='sort-list'>
        {sortOptions.map(option => {
            return <li
            key={uuidv4()}
            onClick={() => selectSortOptionHandler(option.text)}
            className={option.className}>
                {option.text}
            </li>
        })}
    </ul>
}
