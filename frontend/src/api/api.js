import axios from 'axios';

// Defina a URL base da API
const API_BASE_URL = 'http://localhost:8000'; // URL base

// Função para login
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/login/`, {
            username: username,
            password: password
        });
        localStorage.setItem('user_token', response.data.token)
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        throw error; // Lança o erro para tratamento no componente
    }
};

// Função para registro
export const register = async (username, password, email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/register/`, {
            username: username,
            password: password,
            email: email
        });
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        throw error; // Lança o erro para tratamento no componente
    }
};

// Função para buscar os dados do usuário logado
export const getUser = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/user/auth/`, {
            withCredentials: true,
            // headers: {
            //     'Authorization': `Token ${localStorage.getItem('authToken')}` 
            // }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuário autenticado:', error);
        throw new Error('Erro ao buscar usuário autenticado'); 
    }
};

// Função para atualizar informações do usuário
export const updateUser = async (userData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/update-user/`, userData, {
            // headers: {
            //     'Authorization': `Token ${localStorage.getItem('user_token')}`,
            // }
        });
        return response.data; // Retorna os dados atualizados
    } catch (error) {
        throw error; // Lança o erro para tratamento no componente
    }
};

// Função para atualizar a senha do usuário
export const updatePassword = async (passwordData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/update-password/`, passwordData, {
            // headers: {
            //     'Authorization': `Token ${localStorage.getItem('user_token')}`,
            // }
        });
        return response.data; // Retorna a confirmação da atualização
    } catch (error) {
        throw error; // Lança o erro para tratamento no componente
    }
};
//Função para upload da imagem de perfil
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('http://127.0.0.1:8000/perfil/profileImage/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${localStorage.getItem('user_token')}`,
            },
        });
        console.log('Imagem enviada com sucesso! ' + response.data);
    } catch (error) {
        console.log('Erro ao enviar a imagem.');
        console.error('Erro ao enviar a imagem:', error);
        if (error.response) {
            console.error('Dados do erro:', error.response.data);
        }
    }
};

//Função para requisição da imagem de perfil
export const getProfileImage = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/perfil/profileImage/`, {
            headers: {
                'Authorization': `Token ${localStorage.getItem('user_token')}`,
            },
            responseType: 'blob',
        });
        console.log("Sucesso!")
        console.log(response.data)
        const url = URL.createObjectURL(new Blob([response.data]));
        console.log(url)
        return url
    } catch (error) {
        throw error; // Lança o erro para tratamento no componente
    }
};