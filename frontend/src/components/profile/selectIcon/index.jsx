import React, {useState} from 'react';
import { 
    ContainerSelectIcon, PositionSelectIcon
  } from './styles.js'
import { IoCameraOutline } from "react-icons/io5";
import axios from 'axios';



const SelectIcon = () => {
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
        uploadImage(file);
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/perfil/uploadProfilePhoto/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Imagem enviada com sucesso!');
            console.log('Resposta do servidor:', response.data);
        } catch (error) {
            console.log('Erro ao enviar a imagem.');
            console.error('Erro ao enviar a imagem:', error);
            if (error.response) {
                console.error('Dados do erro:', error.response.data);
            }
        }
    };

    return(
        <PositionSelectIcon>
            <label htmlFor="selectIcon">
            <ContainerSelectIcon>
                <IoCameraOutline/>
            </ContainerSelectIcon>
            </label>
            <input 
                type="file" 
                name="selectIcon" 
                id="selectIcon"
                onChange={handleFileChange}
            />
        </PositionSelectIcon>
    );
};

export default SelectIcon;