import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const UserLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>

        </>
    );
};

export default UserLayout;