import React, { useState } from 'react';
import * as S from './styles.js';

const FormProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [form, setForm] = useState({
        'name':'',
        'password':'',
        'confirmPassword':'',
        'email':'',
    });

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm(
            {
                ...form,
                [name]: value
            }
        )
    }

    return (
        <S.Background>
            <S.ContainerForm>
                <S.FormGroup>
                    <S.Label> Nome </S.Label>
                    <S.Field 
                        $edit={isEdit.toString()} 
                        value={ isEdit ? form.name : 'JoaoPinottLeiteLima'}
                        name="name"
                        onChange={handleChange}
                        color='#72C8F3'
                    />
                </S.FormGroup>

                <S.FormGroup>
                    <S.Label> Senha </S.Label>
                    <S.Field 
                        $edit={isEdit.toString()} 
                        value={isEdit ? form.password : 'JoaoPinottLeiteLima'} 
                        name="password"
                        type='password'
                        onChange={handleChange}
                        color='#FFBA08'
                    />
                </S.FormGroup>

                {
                    isEdit && 
                    <S.FormGroup>
                        <S.Label> Confirmar senha </S.Label>
                        <S.Field 
                            $edit={isEdit.toString()}
                            value={form.confirmPassword} 
                            name="confirmPassword"
                            type='password'
                            onChange={handleChange}
                            color='#FFBA08'
                        />
                    </S.FormGroup>
                }

                <S.FormGroup>
                    <S.Label> Email </S.Label>
                    <S.Field 
                        $edit={isEdit.toString()} 
                        value={isEdit ? form.email : 'JoaoPinottLeiteLima@gmail.com'}
                        name="email" 
                        type='email' 
                        onChange={handleChange}  
                        color='#32589B'
                    />    
                </S.FormGroup>

            </S.ContainerForm>
            {
                !isEdit &&
                <S.ButtonEdit 
                    type="submit" 
                    onClick={ () => {setIsEdit(true)} 
            }>
                    Editar Informações
                </S.ButtonEdit>
            }
            {
                isEdit &&
                <S.ContainerButtons>
                    <S.ButtonConfirm type = "submit" onClick={() => {setIsEdit(false)}} >
                        Salvar
                    </S.ButtonConfirm>

                    <S.ButtonCancel type = "submit" onClick={ () => {setIsEdit(false)}}>
                        Cancelar
                    </S.ButtonCancel>
                </S.ContainerButtons>
            }
            

        </S.Background>
    );

};

export default FormProfile;