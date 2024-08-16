import React from 'react';
import IconProfileItem from '../../../components/profile/iconProfileItem';
import SelectIcon from '../../../components/profile/selectIcon'
import SubTitle from '../../../components/global/subtitle/index.js';
import Title from '../../../components/global/title/index.js';
import PolkaDots from '../../../components/global/dots/index.js'


import {
  ContainerProfile, ContainerTitle, ContainerNameUser
} from './styles.js'


const IconProfile = () => {
  return (
    <ContainerProfile>
      <ContainerTitle>
        <Title text="Configure sua" />
        <Title text="conta!" color="dark-blue" />
      </ContainerTitle>
      <IconProfileItem />
      <SelectIcon />
      <ContainerNameUser>
        <SubTitle text="Daniel Lima" />
      </ContainerNameUser>
      <PolkaDots />
    </ContainerProfile>
  );
};

export default IconProfile;