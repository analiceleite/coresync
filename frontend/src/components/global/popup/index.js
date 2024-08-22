import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const PopupContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const PopupCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    color: #333;
`;

const PopupTitle = styled.h2`
    margin: 0;
    font-size: 24px;
`;

const PopupMessage = styled.p`
    font-size: 16px;
    margin: 10px 0;
`;

const PopupError = styled.p`
    color: red;
`;

const PopupSuccess = styled.p`
    color: green;
`;

const Popup = ({ isOpen, onClose, title, message, type }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <PopupOverlay onClick={onClose}>
            <PopupContent onClick={(e) => e.stopPropagation()}>
                <PopupCloseButton onClick={onClose}>×</PopupCloseButton>
                {title && <PopupTitle>{title}</PopupTitle>}
                <PopupMessage>{message}</PopupMessage>
                {type === 'error' && <PopupError>Por favor, tente novamente.</PopupError>}
                {type === 'success' && <PopupSuccess>Cadastro realizado com sucesso!</PopupSuccess>}
            </PopupContent>
        </PopupOverlay>,
        document.body
    );
};

export default Popup;

