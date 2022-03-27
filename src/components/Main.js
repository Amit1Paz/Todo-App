import React, { useState } from 'react';
import AddBox from './AddBox';
import BottomBar from './BottomBar';
import TaskList from './TaskList';

export default function Main() {
    const [toggleFormSubmit, setToggleFormSubmit] = useState(false);
    return <main>
        <AddBox toggleFormSubmit={toggleFormSubmit} setToggleFormSubmit={setToggleFormSubmit} />
        <TaskList />
        <BottomBar toggleFormSubmit={toggleFormSubmit} />
    </main>
}
