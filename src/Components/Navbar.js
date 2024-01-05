import React, { useState, useEffect } from 'react';
import { Modal, Input, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, searchTask, selectTasks, setSearchedTitle } from '../features/taskSlice';

const { Search } = Input;

const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [empty, setEmpty] = useState(false);

    const tasks = useSelector(selectTasks);

    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if (taskTitle) {
            dispatch(addTask({ id: Date.now(), title: taskTitle, done: false }));
            setIsModalOpen(false);
            setTaskTitle('');
        }
        else {
            setEmpty(true)
        }

    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setTaskTitle('');
    };

    const onSearch = (value, _e, info) => {
        dispatch(setSearchedTitle(value))
        dispatch(searchTask())
    };


    return (
        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-10 pt-7 pb-7 flex items-center'>
            <div className='flex items-center'>
                <img src="logo.png" width={40} height={200} className='' alt="logo" />
                <h2 className='ml-2 text-2xl font-semibold text-[#010f2e]'>TodoList</h2>
            </div>
            <div className='col-span-2 flex justify-between items-center'>
                <Search
                    size="large"
                    placeholder="Search..."
                    allowClear
                    onSearch={onSearch}
                    style={{
                        width: 570,
                    }}
                    className='search'
                />

                <button onClick={showModal} className='btn_add text-white rounded-lg p-2 px-5'>
                    <PlusCircleOutlined className='mr-2' /> Add Task
                </button>
                <Modal title="Today task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                    footer={[
                        <Button key="cancel" onClick={handleCancel} className='text-[#4faa84]'>
                            Cancel
                        </Button>,
                        <Button key="submit" onClick={handleOk} className='btn_add text-white'>
                            Add
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
                    {
                        empty ? <p className='text-[#bd4141]'>Please write your tasks.</p> : null
                    }
                </Modal>

            </div>
        </div>
    )
}

export default Navbar
