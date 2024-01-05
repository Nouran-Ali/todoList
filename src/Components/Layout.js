import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import FlyingDots from './FlyingDots';

const Layout = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    return (
        <>
            {
                loading ? (
                    <>
                        <div class="wrapper">
                            <div class="circle_loading"></div>
                            <div class="circle_loading"></div>
                            <div class="circle_loading"></div>
                            <div class="shadows"></div>
                            <div class="shadows"></div>
                            <div class="shadows"></div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="px-32 max-xl:px-10">
                            <Navbar />
                            <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-10'>
                                <Menu />
                                <div className='col-span-2'>
                                    {children}
                                </div>
                            </div>
                        </div>
                        <FlyingDots />
                    </>
                )
            }
        </>
    );
};

export default Layout;