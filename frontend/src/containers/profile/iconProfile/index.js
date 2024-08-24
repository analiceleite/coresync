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
  const [imageFile, setImageFile ] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setUserName(user && user.email); 
  }, []);

  return (
    <ContainerProfile>
      <ContainerTitle>
        <Title text="Configure sua" />
        <Title text="conta!" color="dark-blue" />
      </ContainerTitle>
      <IconProfileItem imageChange={imageFile} />
      <SelectIcon handleImageFile={(file) => {setImageFile(file)}} />
      <ContainerNameUser>
        <SubTitle text={userName} />
      </ContainerNameUser>
      <PolkaDots isSmall/>
    </ContainerProfile>
  );
};

export default IconProfile;
