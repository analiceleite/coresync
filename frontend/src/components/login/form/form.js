import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

//* Components and internal modules
import { NavbarTraining, NavbarTrainingItem, Underline } from "../../../containers/training/trainingList/styles.js";
import PolkaDots from '../../../components/global/dots/index.js'
import * as S from './styles.js';
import { login, register } from '../../../api/api.js';
import Popup from '../../../components/global/popup'; 

const Form = () => {
    //* Password visibility functions
    const [itemActive, setItemActive] = useState(0);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    //* Fields state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');

    //* Popup settings
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState(''); // 'success' or 'error'

    //* Navigate and scroll
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (itemActive === 0) {
                //* Handle login
                const data = await login(email, password);
                console.log('Login realizado com sucesso:', data);
                setPopupMessage('Login realizado com sucesso!');
                setPopupType('success');
                setPopupOpen(true);
                //* Handle successful login
                navigate('/training');
            } else {
                //* Handle registration
                if (password !== confirmPassword) {
                    setPopupMessage('As senhas não conferem');
                    setPopupType('error');
                    setPopupOpen(true);
                    return;
                }
                const data = await register(email, password, fullName);
                console.log('Cadastro realizado com sucesso:', data);
                //* Handle successful registration
                setPopupMessage('Cadastro realizado com sucesso! Por favor, faça o login.');
                setPopupType('success');
                setPopupOpen(true);

                //* Cleaning fields
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setFullName('');

                //* Go back to login
                setItemActive(0);
            }
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            setPopupMessage('Um erro ocorreu: ' + (error.response?.data?.error || error.message));
            setPopupType('error');
            setPopupOpen(true);
        }
    };

    return (
        <S.FormContainer>
            <S.PolkaDotsContainer>
                <NavbarTraining>
                    <ul>
                        <NavbarTrainingItem onClick={() => setItemActive(0)}>
                            Entrar
                        </NavbarTrainingItem>
                        <NavbarTrainingItem onClick={() => setItemActive(1)}>
                            Cadastrar
                        </NavbarTrainingItem>
                        <Underline active={itemActive} scenario="login"></Underline>
                    </ul>
                </NavbarTraining>
                <PolkaDots isSmall={true} />
            </S.PolkaDotsContainer>

            <S.Form onSubmit={handleSubmit}>
                <S.FormGroup>
                    <S.Label>Email:</S.Label>
                    <S.Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label>Senha:</S.Label>
                    <S.InputWrapper>
                        <S.Input
                            type={passwordVisible ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <S.Icon onClick={toggleConfirmPasswordVisibility}>
                                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                </S.Icon>
                            </S.InputWrapper>
                        </S.FormGroup>
                        <S.FormGroup>
                            <S.Label>Nome Completo:</S.Label>
                            <S.Input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </S.FormGroup>
                    </>
                )}

                <S.Button type="submit">
                    {itemActive === 0 ? "Entrar" : "Cadastrar"}
                </S.Button>
            </S.Form>

            {/* Popup component */}
            <Popup
                isOpen={popupOpen}
                onClose={() => setPopupOpen(false)}
                title={popupType === 'error' ? 'Error' : 'Success'}
                message={popupMessage}
                type={popupType}
            />
        </S.FormContainer>
    );
};

export default Form;
