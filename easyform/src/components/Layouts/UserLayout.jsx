import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import CreateProject from '../CreateProject/CreateProject';
import { ProjectConstextProvider } from '../../context/ProjectListContext';

const UserLayout = () => {
    return (
        <>
        <Navbar/>
        <ProjectConstextProvider>
            <CreateProject/>
        </ProjectConstextProvider>
        <Outlet/>

        </>
    );
};

export default UserLayout;