import React from 'react';
import ClearBtn from './ClearBtn';
import Counter from './Counter';
import Sort from './Sort';

export default function BottomBar({ toggleFormSubmit }) {
    return <div className='bottom-bar'>
        <Counter />
        <Sort toggleFormSubmit={toggleFormSubmit} />
        <ClearBtn />
    </div>
}
