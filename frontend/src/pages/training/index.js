import React from 'react';
import './styles.css';
import Menu from '../../components/global/menu';
import Title from '../../components/global/title';

const Training = () => {
  return (
    <div className='container' >
        <Menu/>
        <main className='center' >
          <section className='training-container'>

            <div>
              
                <Title text="Bem-vindo aos"/>
                <Title text="Treinamentos!" color="dark-blue" />
              
            </div>
            <div></div>
          </section>
        </main>
    </div>
  );
};

export default Training;