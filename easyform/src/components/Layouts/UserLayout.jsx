import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import CreateProject from '../CreateProject/CreateProject';

const UserLayout = () => {
    return (
        <>
        <Navbar/>
        <CreateProject/>
        <Outlet/>

        </>
    );
};

export default UserLayout;