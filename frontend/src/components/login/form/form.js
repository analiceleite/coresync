import React, { useState } from "react";
import { NavbarTraining, NavbarTrainingItem, Underline } from "../../../containers/training/trainingList/styles.js";
import PolkaDots from '../../../components/global/dots/index.js'
import * as S from './styles.js';

const Form = () => {
    const [itemActive, setItemActive] = useState(0)

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
                            Cadastrar-se
                        </NavbarTrainingItem>
                        <Underline active={itemActive} scenario="login"></Underline>
                    </ul>
                </NavbarTraining>
                <PolkaDots isSmall={true}/>
            </S.PolkaDotsContainer>
            <S.Form>
                <S.FormGroup>
                    <S.Label>Email:</S.Label>
                    <S.Input type="email" required />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label>Senha:</S.Label>
                    <S.Input type="password" required />
                </S.FormGroup>
                <S.Button type="submit">Entrar</S.Button>
            </S.Form>
        </S.FormContainer>
    );
};

export default Form;
