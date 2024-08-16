import React from 'react';
import MouseFollower from '../../components/mouse';
import Form from '../../components/login/form/form';
import Logo from '../../assets/CoreSync-removebg.png'
import * as S from './styles.js';

const Login = () => {
  return (
    <S.LoginContainer>
      <MouseFollower />
      <S.LeftContainer>
        <Form />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Logo src={Logo} alt="CoreSync Logo" />
      </S.RightContainer>
    </S.LoginContainer>
  );
};

export default Login;
