import React from 'react';
import './styles.css';
// import { useLocation } from 'react-router-dom';

import { IoLibraryOutline, IoPersonOutline, IoVideocamOutline, IoLogOutOutline  } from "react-icons/io5";

const Menu = () => {
    // const location = useLocation();
    // const currentPath = location.pathname;
    // console.log(currentPath)
    return (
        <aside className="sidebar-container center">
            <nav className="navbar">
                <ul>
                    <li className='menu-item'><IoPersonOutline/></li>
                    <li className='menu-selected-item' ><IoLibraryOutline/></li>
                    <li className='menu-item'><IoVideocamOutline/></li>
                </ul>
                <button className=''><IoLogOutOutline/></button>    
            </nav>
        </aside>
    );
};

export default Menu;
