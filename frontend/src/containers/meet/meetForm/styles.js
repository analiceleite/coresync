import styled from 'styled-components';

export const Form = styled.form`
    height: 100%;
    max-width: 600px;
    border-radius: 20px;
    box-shadow: 1px 1px 8px rgba(0,0,0,.25);
    padding: 35px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1260px){
        padding-inline: 20px;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 0px 0px 0px 10px;
    flex: 1;
    background-color: #FBFBFB;
    max-width: 100%;
    overflow: hidden;

    svg {
        color: #333;
    }
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    ${FormGroup} {
        width: 34.5%;
    }

    ${FormGroup}:nth-of-type(1) {
        ${InputWrapper}{
            padding: 0px !important;
        }
    }

    ${FormGroup}:nth-of-type(2) {
        width: 26%;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    flex: 1;
    padding: 8px;
    border: none;
    font-size: 16px;
    outline: none;
    width: 100%;
    background-color: #FBFBFB;

    &::placeholder {
        color: #aaa;
    }
`;

export const Textarea = styled.textarea`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
    resize: vertical;
    min-height: 90px;
    outline: none;
    background-color: #FBFBFB;

    &::placeholder {
        color: #aaa;
    }
`;

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #1a3a72;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #01164d;
  }
`;

export const Select = styled.select`
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    width: 100%;
    background-color: #FBFBFB;

    &::placeholder {
        color: #aaa;
    }
`;
