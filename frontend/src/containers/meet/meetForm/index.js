import React, { useState } from 'react';
import * as S from './styles';
import { IoTime, IoHourglass, IoText } from 'react-icons/io5';
import { registerMeet } from '../../../api/meet_api.js';
import Popup from '../../../components/global/popup';

const MeetForm = () => {
  //* Fields state 
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [descricao, setDescricao] = useState('');
  const [participantes, setParticipantes] = useState('');
  const [duracao, setDuracao] = useState('15min');
  const [isLoading, setIsLoading] = useState(false);

  //* Popup settings
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('evento chamado!')
    setIsLoading(true);

    console.log('Dados para envio:', { titulo, data, hora, descricao, participantes, duracao });
    const participantsArray = participantes.split(',').map(id => id.trim());

    try {
      const responseData = await registerMeet(titulo, data, hora, descricao, participantsArray, duracao);
      console.log('Agendamento realizado com sucesso!', responseData);
      setPopupOpen(true);

      setTitulo('');
      setData('');
      setHora('');
      setDuracao('');
      setParticipantes('');
      setDescricao('');

    } catch (e) {
      setPopupMessage('Erro ao registrar!');
      setPopupType('error');
      setPopupOpen(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <S.Form onSubmit={handleRegister}>
      <S.FormGroup>
        <S.Label htmlFor="titulo">Título</S.Label>
        <S.InputWrapper>
          <IoText />
          <S.Input type="text" id="titulo" placeholder="Digite o título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </S.InputWrapper>
      </S.FormGroup>
      <S.FormRow>
        <S.FormGroup>
          <S.Label htmlFor="data">Data</S.Label>
          <S.InputWrapper>
            <S.Input type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} required />
          </S.InputWrapper>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="hora">Hora</S.Label>
          <S.InputWrapper>
            <IoTime />
            <S.Input type="text" id="hora" placeholder="HH:MM" value={hora} onChange={(e) => setHora(e.target.value)} />
          </S.InputWrapper>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="duracao">Duração</S.Label>
          <S.InputWrapper>
            <IoHourglass />
            <S.Select id="duracao" value={duracao} onChange={(e) => setDuracao(e.target.value)} required>
              <option value="15min">15min</option>
              <option value="30min">30min</option>
              <option value="45min">45min</option>
              <option value="60min">1h</option>
              <option value="90min">1h e 30min </option>
              <option value="120min">2h</option>
            </S.Select>
          </S.InputWrapper>
        </S.FormGroup>
      </S.FormRow>

      <S.FormGroup>
        <S.Label htmlFor="descricao">Descrição</S.Label>
        <S.Textarea id="descricao" placeholder="Descreva pontos abordados..." value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label htmlFor="convidadas">Pessoas convidadas</S.Label>
        <S.InputWrapper>
          <IoText />
          <S.Input type="text" id="convidadas" placeholder="Digite os nomes" value={participantes} onChange={(e) => setParticipantes(e.target.value)} required />
        </S.InputWrapper>
      </S.FormGroup>
      <S.Button type="submit" disabled={isLoading}>
        {isLoading ? "Agendando..." : "Agendar"}
      </S.Button>
      <Popup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        title={popupType === 'error' ? 'Erro!' : 'Sucesso!'}
        message={popupMessage}
        type={popupType}
      />
    </S.Form>
  );
};

export default MeetForm;
