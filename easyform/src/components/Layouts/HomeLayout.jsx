import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const HomeLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
        
    );
};

export default HomeLayout;