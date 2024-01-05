import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import { Checkbox } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, editTask } from '../features/taskSlice';
import { completeTask } from '../features/taskSlice';

const Task_list = ({ tasks }) => {
    const searchedTitle = useSelector(state => state.tasks.searchedTitle);
    const serchedTasks = useSelector(state => state.tasks.searchedList);
    const mapingTasks = searchedTitle ? serchedTasks : tasks
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const [taskId, setTaskId] = useState(0);
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const showModal = (task) => {
        setIsModalOpen(true);
        setTaskId(task.id)
    };

    const showEditModal = (task) => {
        setIsModalOpenEdit(true);
        setTaskId(task.id)
        setTaskTitle(task.title)
    };

    const handleDelete = () => {
        setIsModalOpen(false);
        dispatch(removeTask(taskId));
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleEditCancel = () => {
        setIsModalOpenEdit(false);
    };

    const handleCheckboxChange = (e, taskId) => {
        const isChecked = e.target.checked;
        dispatch(completeTask({ taskId, completed: isChecked }));
    };

    const handleEdit = () => {
        dispatch(editTask({taskId:taskId, title: taskTitle}));
    }

    return (
        <>
            {mapingTasks.map(task => (
                <div key={task.id} className='task_list animation_left bg-white rounded-lg flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <Checkbox onChange={(e) => handleCheckboxChange(e, task.id)} checked={task.done} />
                        <p className='ml-3'>{task.title}</p>
                    </div>
                    <div>
                        <button onClick={() => showEditModal(task)}><EditOutlined className='ml-6' /></button>
                        <Modal title="Confirmation" open={isModalOpenEdit} onCancel={handleEditCancel}
                            footer={[
                                <Button key="cancel" onClick={handleEditCancel} className='cancel_btn text-[#bd4141]'>
                                    Cancel
                                </Button>,
                                <Button key="submit" onClick={handleEdit} className='delete_btn text-white'>
                                    Edit
                                </Button>,
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Write your task here..."
                                className='my-3'
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                required
                            />
                        </Modal>

                        <button onClick={() => showModal(task)}><DeleteOutlined className='ml-6' /></button>
                        <Modal title="Confirmation" open={isModalOpen} onCancel={handleCancel}
                            footer={[
                                <Button key="cancel" onClick={handleCancel} className='cancel_btn text-[#bd4141]'>
                                    Cancel
                                </Button>,
                                <Button key="submit" onClick={handleDelete} className='delete_btn text-white'>
                                    Delete
                                </Button>,
                            ]}
                        >
                            <p>Are you sure you want to delete this task?</p>
                        </Modal>
                    </div>
                </div>
            ))}

            <div className='cicule_list'></div>
            <div className='half_cicule_list absolute right-0 bottom-0'>
                <img src="shape2.png" width={20} height={200} className='' alt="shape" />
            </div>
        </>
    )
}

export default Task_list
