import React from 'react';
import * as S from './styles.js';

const FormProfile = () => {
    return (
        <S.Background>
            <S.ContainerForm>
                
                <S.FormGroup>
                    <S.Label> Nome </S.Label>
                    <S.Field>
                        Daniel Lima
                    </S.Field>
                </S.FormGroup>

                <S.FormGroup>
                    <S.Label> Senha </S.Label>
                    <S.Field></S.Field>
                </S.FormGroup>

                <S.FormGroup>
                    <S.Label> Email </S.Label>
                    <S.Field></S.Field>
                </S.FormGroup>

            </S.ContainerForm>
            <S.ButtonEdit type="submit">
                Editar Informações
            </S.ButtonEdit>
        </S.Background>
    );

};

export default FormProfile;