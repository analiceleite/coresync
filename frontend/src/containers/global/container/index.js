import React from 'react';
import './styles.css';
import Menu from '../../../components/global/menu';

const Container = ({children}) => {
  return (
    <div className='container'>
        <Menu/>
        <main className='center'>
            {children}
        </main>
    </div>
  );
};

export default Container;