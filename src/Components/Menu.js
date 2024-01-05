import React from 'react'
import { UnorderedListOutlined, CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className='bg-white text-[#666666] text-lg p-7 rounded-lg border-dashed border-2 border-[#a7a7a7]  animation_right'>
                <NavLink end to='/' className={({ isActive }) => isActive ? "active_menu p-3 rounded-lg flex items-center" : "p-3 rounded-lg flex items-center"}>
                    <UnorderedListOutlined />
                    <p className='ml-3'>All</p>
                </NavLink>

                <NavLink end to='/completed' className={({ isActive }) => isActive ? "active_menu p-3 rounded-lg flex items-center mt-3" : "p-3 rounded-lg flex items-center mt-3"}>
                    <CheckCircleOutlined />
                    <p className='ml-3'>Completed</p>
                </NavLink>
            </div>
            <div className='absolute -left-10 bottom-10'>
                <img src="shape1.png" width={100} height={200} className='' alt="shape" />
            </div>
        </>
    )
}

export default Menu
