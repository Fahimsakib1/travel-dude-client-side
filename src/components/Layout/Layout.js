import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Header1 from '../Header1/Header1';
import './Layout.css'

const Layout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Header1></Header1> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;