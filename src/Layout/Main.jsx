import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* navabr  */}
             <Navbar/>
         
            {/* outlet  */}
             <Outlet/>
            {/* footer  */}
        </div>
    );
};

export default Main;