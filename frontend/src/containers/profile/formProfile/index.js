import React, { useState, useEffect } from 'react';
import * as S from './styles.js';
import { getUser, updateUser, updatePassword } from '../../../api/api'; // Atualize o caminho conforme necessário
import Popup from '../../../components/global/popup'; // Atualize o caminho conforme necessário

const FormProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [form, setForm] = useState({
        'name': '',
        'password': '',
        'confirmPassword': '',
        'email': '',
    });
    const [popup, setPopup] = useState({
        visible: false,
        message: '',
        type: '' // 'success' or 'error'
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUser();
                setForm({
                    name: userData.name || '',
                    email: userData.email || '',
                    password: '',
                    confirmPassword: ''
                });
            } catch (error) {
                setPopup({
                    visible: true,
                    message: 'Não foi possível carregar os dados do usuário.',
                    type: 'error'
                });
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSave = async () => {
        setLoading(true);
        setPopup({ ...popup, visible: false });

        try {
            if (form.password && form.password !== form.confirmPassword) {
                setPopup({
                    visible: true,
                    message: 'As senhas não conferem.',
                    type: 'error'
                });
                setLoading(false);
                return;
            }

            const updateData = {
                name: form.name,
                email: form.email
            };

            await updateUser(updateData);

            if (form.password) {
                await updatePassword({ password: form.password });
            }

            setPopup({
                visible: true,
                message: 'Informações atualizadas com sucesso!',
                type: 'success'
            });
            setIsEdit(false);
        } catch (error) {
            setPopup({
                visible: true,
                message: 'Erro ao salvar as informações.',
                type: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <S.Background>
            <S.ContainerForm>
                <S.FormGroup>
                    <S.Label> Nome </S.Label>
                    <S.Field
                        edit={isEdit}
                        value={form.name}
                        name="name"
                        onChange={handleChange}
                        color='#72C8F3'
                    />
                </S.FormGroup>

                <S.FormGroup>
                    <S.Label> Senha </S.Label>
                    <S.Field
                        edit={isEdit}
                        value={form.password}
                        name="password"
                        type='password'
                        onChange={handleChange}
                        color='#FFBA08'
                    />
                </S.FormGroup>

                {isEdit && (
                    <S.FormGroup>
                        <S.Label> Confirmar senha </S.Label>
                        <S.Field
                            edit={isEdit}
                            value={form.confirmPassword}
                            name="confirmPassword"
                            type='password'
                            onChange={handleChange}
                            color='#FFBA08'
                        />
                    </S.FormGroup>
                )}

                <S.FormGroup>
                    <S.Label> Email </S.Label>
                    <S.Field
                        edit={isEdit}
                        value={form.email}
                        name="email"
                        type='email'
                        onChange={handleChange}
                        color='#32589B'
                    />
                </S.FormGroup>
            </S.ContainerForm>

            {!isEdit ? (
                <S.ButtonEdit type="button" onClick={() => setIsEdit(true)}>
                    Editar Informações
                </S.ButtonEdit>
            ) : (
                <S.ContainerButtons>
                    <S.ButtonConfirm type="button" onClick={handleSave} disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar'}
                    </S.ButtonConfirm>

                    <S.ButtonCancel type="button" onClick={() => setIsEdit(false)}>
                        Cancelar
                    </S.ButtonCancel>
                </S.ContainerButtons>
            )}

            {popup.visible && (
                <Popup
                    message={popup.message}
                    type={popup.type}
                    onClose={() => setPopup({ ...popup, visible: false })}
                />
            )}
        </S.Background>
    );
};

export default FormProfile;
