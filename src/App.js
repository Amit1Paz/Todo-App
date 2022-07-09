import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import taskListContext from './contexts/taskListContext';
import axios from 'axios';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  useEffect(() => {
    axios.get('/home')
      .then(res => {
        setTaskList(res.data.map(task => {
          return {
            content: task.content,
            state: task.state,
            id: task._id,
            visible: true
          }
        }))
      })
      .catch(err => console.log(err));  
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <taskListContext.Provider value={[taskList, setTaskList]}>
          <Routes>
              <Route path='/' element={<Navigate replace to='/home' />} />
              <Route path='/home' element={<Home />} />
          </Routes>
        </taskListContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
