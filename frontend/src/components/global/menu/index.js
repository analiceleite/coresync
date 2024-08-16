import React from 'react';
import { Link } from 'react-router-dom';
import { Aside, Navbar, MenuItem } from './styles';

import { IoLibraryOutline, IoPersonOutline, IoVideocamOutline, IoLogOutOutline  } from "react-icons/io5";

const Menu = () => {
    return (
        <Aside>
            <Navbar>
                <ul>
                    <MenuItem><IoPersonOutline/></MenuItem>
                    <MenuItem><IoLibraryOutline/></MenuItem>
                    <MenuItem><IoVideocamOutline/></MenuItem>
                </ul>
                <Link to='/'>
                    <IoLogOutOutline/>
                </Link>     
            </Navbar>
        </Aside>
    );
};

export default Menu;
