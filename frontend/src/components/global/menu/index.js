import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { IoLibraryOutline, IoPersonOutline, IoVideocamOutline, IoLogOutOutline  } from "react-icons/io5";
import { logout } from '../../../api/api';

const Menu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    
    const fetchLogout = () => {
        localStorage.clear();
        logout();
    }

    return (
        <S.Aside>
            <S.Navbar>
                <ul>
                    <S.MenuItem $active={currentPath === '/profile' && 'true'}>
                        <Link to="/profile"><IoPersonOutline/></Link>
                    </S.MenuItem>
                    <S.MenuItem $active={currentPath === '/training' && 'true'}>
                        <Link to="/training"><IoLibraryOutline/></Link>
                    </S.MenuItem>
                    <S.MenuItem $active={currentPath === '/meeting' && 'true'}>
                        <Link to="/meeting"><IoVideocamOutline/></Link>
                    </S.MenuItem>
                </ul>
                <S.Logout onClick={logout} >
                    <Link to='/'>
                        <IoLogOutOutline/>
                    </Link>   
                </S.Logout>  
            </S.Navbar>
        </S.Aside>
    );
};

export default Menu;
