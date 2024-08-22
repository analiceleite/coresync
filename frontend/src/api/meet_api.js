import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const registerMeet = async (titulo, data, hora, descricao, participantes, duracao) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/meet/`, {
            titulo: titulo,
            data: data,
            hora: hora,
            descricao: descricao,
            duracao: duracao,
            participantes: participantes,
        }, {
            headers: {
                'Authorization': `Token ${localStorage.getItem('user_token')}`,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
