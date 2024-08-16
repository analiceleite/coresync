import React from 'react';
import * as S from './styles';
import { IoChevronDownOutline } from "react-icons/io5";

const Status = () => {
  return (
    <S.Container>
      <S.StatusSelector>
          <div>Pending</div>
          <div>
              <span>Update</span>
              <IoChevronDownOutline/>
          </div>
      </S.StatusSelector>
      <S.StatusMenu>
        
      </S.StatusMenu>
    </S.Container>
  );
};

export default Status;