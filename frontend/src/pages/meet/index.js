import React, { useContext, useState } from 'react';
import Title from '../../components/global/title';
import BaseContainer from '../../containers/global/baseContainer';
import { TitleContainer, MeetListContainer } from './styles.js';
import MeetForm from '../../containers/meet/meetForm/index.js';
import MeetList from '../../containers/meet/meetList/index.jsx';
import PopupMeet from '../../components/meet/popupMeet/index.jsx';
import { PopupContext } from '../../contexts/popupContext.jsx';

const Meet = () => {
  const { idPopup } = useContext(PopupContext);
  const [renderList, setRenderList] = useState(false);

  return (
  <>
    <PopupMeet id={idPopup} />
    <BaseContainer>
      <div>
        <TitleContainer>
          <Title text="Agende aqui sua"/>
          <Title text="reunião!" color="dark-blue"/>
        </TitleContainer>
        <MeetListContainer>
          <MeetList renderList={renderList}/>
        </MeetListContainer>
      </div>
      <div>
        <MeetForm renderList={renderList} setRenderList={setRenderList}/>  
      </div>
    </BaseContainer>
  </>
  );
};

export default Meet;