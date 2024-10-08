import styled from "styled-components";

export const FormContainer = styled.div`
  border-radius: 12px;
  height: auto;
  max-height: 80vh;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  background-color: #FFFFFF;
`;

export const PolkaDotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
    margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  margin: 20px 0px 20px 0px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #ccc;
  border-left: 3px solid #FFBA08;
  outline: none;
  cursor: pointer;
`;

export const Icon = styled.div`
  position: absolute;
  top: 65%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #1a3a72;
  font-size: 18px;

  &:hover {
    color: #01164d;
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
