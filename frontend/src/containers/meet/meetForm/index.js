import React from 'react';
import * as S from './styles';
import { IoCalendar, IoTime, IoHourglass, IoText } from 'react-icons/io5';

const MeetForm = () => {
  return (
    <S.Container>
      <S.FormGroup>
        <S.Label htmlFor="titulo">Título</S.Label>
        <S.InputWrapper>
          <IoText />
          <S.Input type="text" id="titulo" placeholder="Digite o título" />
        </S.InputWrapper>
      </S.FormGroup>
      <S.FormRow>
        <S.FormGroup>
          <S.Label htmlFor="data">Data</S.Label>
          <S.InputWrapper>
            {/* <IoCalendar /> */}
            <S.Input type="date" id="data" />
          </S.InputWrapper>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="hora">Hora</S.Label>
          <S.InputWrapper>
            <IoTime />
            <S.Input type="text" id="hora" placeholder="HH:MM" />
          </S.InputWrapper>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="duracao">Duração</S.Label>
          <S.InputWrapper>
            <IoHourglass />
            <S.Select id="duracao">
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
        <S.Textarea id="descricao" placeholder="Descreva pontos abordados..." />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label htmlFor="convidadas">Pessoas convidadas</S.Label>
        <S.InputWrapper>
          <IoText />
          <S.Input type="text" id="convidadas" placeholder="Digite os nomes" />
        </S.InputWrapper>
      </S.FormGroup>
      <S.Button>Agendar</S.Button>
    </S.Container>
  );
};

export default MeetForm;
