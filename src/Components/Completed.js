import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
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
            {
                tasks != 0 ? <TaskList tasks={completedTasks} /> :
                    <div className='flex justify-center items-center mt-20 max-xl:mt-3'>
                        <div>
                            <dotlottie-player
                                src="https://lottie.host/8c3d1a45-fde2-41e8-bace-9bcd50c0ff8e/rWWLhi6IOn.json"
                                background="transparent"
                                speed="1"
                                style={{ width: "200px", height: "200px" }}
                                loop
                                autoplay
                            ></dotlottie-player>
                            <p className='text-[#666666] text-center'>No completed tasks added</p>
                        </div>
                    </div>
            }
        </div>

    )
}

export default Completed