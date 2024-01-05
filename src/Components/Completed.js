import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Task_list from './Task_list';
import { selectTasks, setTaskList } from '../features/taskSlice';

const Completed = () => {
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();
    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        const storedCompletedTasks = localStorage.getItem('completedTasks');
        if (storedCompletedTasks) {
            const parsedTasks = JSON.parse(storedCompletedTasks);
            setCompletedTasks(parsedTasks);
        }
    }, [dispatch, tasks]);

    return (
        <div className='scrollStyle'>
            <Task_list tasks={completedTasks} />
        </div>
    )
}

export default Completed