import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Task_list from './Task_list';
import { selectTasks, setTaskList } from '../features/taskSlice';

const Home = () => {

    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const parsedTasks = JSON.parse(storedTasks);
            dispatch(setTaskList(parsedTasks));
        }
    }, [dispatch]);

    return (
        <div className='scrollStyle'>
            <Task_list tasks={tasks} />
        </div>
    )
}

export default Home