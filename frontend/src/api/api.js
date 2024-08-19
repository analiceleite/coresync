import axios from 'axios';

// Defina a URL base da API
const API_BASE_URL = 'http://localhost:8000'; // URL base

// Função para login
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/login/`, {
            username: email,
            password: password
        });
        return response.data; // Retorno dos dados da resposta
    } catch (error) {
        throw error; // Lança o erro para tratamento no componente
    }
};

// Função para registro
export const register = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/register/`, {
            username: email,
            password: password,
            email: email
        });
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        throw error; // Lança o erro para tratamento no componente
    }
};
