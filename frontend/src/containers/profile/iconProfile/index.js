import React, { useState, useEffect } from 'react';
import IconProfileItem from '../../../components/profile/iconProfileItem';
import SelectIcon from '../../../components/profile/selectIcon';
import SubTitle from '../../../components/global/subtitle/index.js';
import Title from '../../../components/global/title/index.js';
import PolkaDots from '../../../components/global/dots/index.js';
import * as API from '../../../api/api.js'; 

import {
  ContainerProfile, ContainerTitle, ContainerNameUser
} from './styles.js';

const IconProfile = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await API.getUser();
        setUserName(response.data.username || ''); 
      } catch (error) {
        console.error('Erro ao buscar nome do usuário:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <ContainerProfile>
      <ContainerTitle>
        <Title text="Configure sua" />
        <Title text="conta!" color="dark-blue" />
      </ContainerTitle>
      <IconProfileItem />
      <SelectIcon />
      <ContainerNameUser>
        <SubTitle text={userName} />
      </ContainerNameUser>
      <PolkaDots />
    </ContainerProfile>
  );
};

export default IconProfile;
