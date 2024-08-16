import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavbarTraining, NavbarTrainingItem, Underline } from "../../../containers/training/trainingList/styles.js";
import PolkaDots from '../../../components/global/dots/index.js'
import * as S from './styles.js';

const Form = () => {
    const [itemActive, setItemActive] = useState(0);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <S.FormContainer>
            <S.PolkaDotsContainer>
                <NavbarTraining>
                    <ul>
                        <NavbarTrainingItem
                            onClick={() => { setItemActive(0) }}
                        >
                            Entrar
                        </NavbarTrainingItem>
                        <NavbarTrainingItem
                            onClick={() => { setItemActive(1) }}
                        >
                            Cadastrar
                        </NavbarTrainingItem>
                        <Underline active={itemActive} scenario="login"></Underline>
                    </ul>
                </NavbarTraining>
                <PolkaDots isSmall={true} />
            </S.PolkaDotsContainer>

            <S.Form>
                <S.FormGroup>
                    <S.Label>Email:</S.Label>
                    <S.Input type="email" required />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label>Senha:</S.Label>
                    <S.InputWrapper>
                        <S.Input
                            type={passwordVisible ? "text" : "password"}
                            required
                        />
                        <S.Icon onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </S.Icon>
                    </S.InputWrapper>
                </S.FormGroup>

                {itemActive === 1 && (
                    <>
                        <S.FormGroup>
                            <S.Label>Confirmar Senha:</S.Label>
                            <S.InputWrapper>
                                <S.Input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    required
                                />
                                <S.Icon onClick={toggleConfirmPasswordVisibility}>
                                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                </S.Icon>
                            </S.InputWrapper>
                        </S.FormGroup>
                        <S.FormGroup>
                            <S.Label>Nome Completo:</S.Label>
                            <S.Input type="text" required />
                        </S.FormGroup>
                    </>
                )}

                <S.Button type="submit">
                    {itemActive === 0 ? "Entrar" : "Cadastrar"}
                </S.Button>
            </S.Form>
        </S.FormContainer>
    );
};

export default Form;
