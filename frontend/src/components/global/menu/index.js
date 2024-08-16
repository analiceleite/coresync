import React from 'react';
// import { useLocation } from 'react-router-dom';
import { Aside, Navbar, MenuItem } from './styles';

import { IoLibraryOutline, IoPersonOutline, IoVideocamOutline, IoLogOutOutline  } from "react-icons/io5";

const Menu = () => {
    // const location = useLocation();
    // const currentPath = location.pathname;
    // console.log(currentPath)
    return (
        <Aside>
            <Navbar>
                <ul>
                    <MenuItem><IoPersonOutline/></MenuItem>
                    <MenuItem><IoLibraryOutline/></MenuItem>
                    <MenuItem><IoVideocamOutline/></MenuItem>
                </ul>
                <a><IoLogOutOutline/></a>    
            </Navbar>
        </Aside>
    );
};

export default Menu;
