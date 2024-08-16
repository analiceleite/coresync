import React from 'react';
import MouseFollower from '../../components/mouse';
import Footer from '../../components/global/footer';
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
      <Footer />
    </S.LoginContainer>
  );
};

export default Login;
