import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Header1 from '../Header1/Header1';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Header1></Header1> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;